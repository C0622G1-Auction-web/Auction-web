import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AuthService} from "../../service/security/auth.service";
import {TokenService} from "../../service/security/token.service";
import {MessageRespone} from "../../model/security/message-respone";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rfLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ) {
  }

  ngOnInit(): void {
    this.getFormLogin();
  }

  getFormLogin() {
    this.rfLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rememberMe: [false]
    })
  }

  login() {
    this.authService.login(this.rfLogin.value).subscribe(data => {
      if(data.token != undefined) {

        if (this.rfLogin.value.rememberMe) {
          this.tokenService.rememberMe(data.accountId, data.deleteStatus, data.statusLock, data.username,
            data.token, data.role)
        } else {
          this.tokenService.setAccountIdSession(data.accountId);
          this.tokenService.setDeleteStatusSession(data.deleteStatus);
          this.tokenService.setStatusLockSession(data.statusLock);
          this.tokenService.setUsernameSession(data.username);
          this.tokenService.setTokenSession(data.token);
          this.tokenService.setRoleSession(data.role);
        }

        this.router.navigate(['/home']).then(()=>{
          location.reload();
        })

      }
    },error => {

      const messageRespone: MessageRespone = error;

      if (messageRespone.message) {
        this.toastr.error('Không tìm thấy người dùng')
        this.router.navigateByUrl('/login')
      } else {
        this.toastr.error('Đăng nhập thất bại')
        this.router.navigateByUrl('/login')
        console.log('Đăng nhập thất bại')
      }

    })
  }


}
