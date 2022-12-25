import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UserType} from "../../model/user/user-type";
import {User} from '../../model/user/user';
import {Observable} from 'rxjs';
import {UserEditDto} from "../../dto/user-edit-dto";
import {UnlockUsers} from "../../model/user/unlock-users";


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  /**
   * Create by: HaiNT
   * Date created: 15/12/2022
   * @return  UserType[]
   */
  findAllUserType() {
    return this._httpClient.get<UserType[]>(
      environment.api_url_userType);
  }

  /**
   * Create by: HaiNT
   * Date created: 15/12/2022
   * @param rfSearch
   * @param pageNumber
   * return page user by param
   */
  searchBy(rfSearch: any, pageNumber: any) {
    return this._httpClient.get<any>(environment.api_url_list_user +
      '/list?page=' + pageNumber +
      '&id=' + rfSearch.idSearch +
      '&name=' + rfSearch.nameSearch +
      '&email=' + rfSearch.emailSearch +
      '&address=' + rfSearch.addressSearch +
      '&userType=' + rfSearch.userTypeSearch);
  }

  /**
   * Create by: HaiNT
   * @param id
   * return  user by id
   */
  findUserEditById(id: number): Observable<User> {
    return this._httpClient.get<User>(environment.api_url_list_user + '/' + id, this.httpOptions)
  }


  /**
   * Create by: HungNV
   * Date created: 16/12/2022
   * @return User
   */
  findUserByAccount(value: string): Observable<User> {
    return this._httpClient.get<User>(environment.userUrl + "/find/" + value);
  }


  /**
   * Create by: NguyenNQ
   * Date created: 15/12/2022
   * @return User
   */
  saveaddAcountUser(user: User):
    Observable<User> {
    console.log(user);
    return this._httpClient.post<User>('http://localhost:8080/api/user/v1/add', user);
  }


  /**
   * Create by: HaiNT
   * Date created: 16/12/2022
   * @return User
   */
  updateByAdim(id: any, user: any): Observable<UserEditDto> {
    return this._httpClient.put<UserEditDto>(environment.api_url_list_user + '/' + id, user);
  }

  /**
   * Create by: HaiNT
   * Date created: 16/12/2022
   * @return User
   */
  unlock(unlockIds: number[]): Observable<any> {
    return this._httpClient.post<UserEditDto[]>(environment.api_url_list_user + '/unlockUser', unlockIds);
  }

  /**
   * Create by: HaiNT
   * Date created: 16/12/2022
   * @return User
   */

  findByListId(unlockIds: number[]): Observable<UnlockUsers[]> {
    return this._httpClient.post<UnlockUsers[]>(environment.api_url_list_user_list_id, unlockIds);
  }

  /**
   * Created: QuangND
   * Date: 21/12/2022
   */
  getAllUserChat():Observable<User[]>{
    return  this._httpClient.get<User[]>('http://localhost:8080/api/v1/users/getAll');
  }
  findAllUser(): Observable<User[]> {
    return this._httpClient.get<User[]>(environment.uri_api_find_all_user_v1)
  }
  createUser(user: User): Observable<User> {
    console.log(user)
    return this._httpClient.post<User>(environment.uri_api_create_user_v1_user, user);
  }
  findUserByIdServer(userId: number): Observable<User> {
    return this._httpClient.get<User>(environment.uri_api_find_by_id_user_v1_user +'/' + userId);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this._httpClient.put<User>(environment.uri_api_update_user_v1_user + '/' + user.id, user);
  }

}
