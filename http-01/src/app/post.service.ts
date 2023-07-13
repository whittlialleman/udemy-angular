import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PostService {

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content }
        this.http
            .post<{name: string}>('https://udemy-angular-f2c29-default-rtdb.firebaseio.com/posts.json', postData)
            .subscribe(responseData => {
                console.log(responseData);
        });
    }

    fetchPosts() {
        return this.http
        .get<{[key: string]: Post }>('https://udemy-angular-f2c29-default-rtdb.firebaseio.com/posts.json')
        .pipe(map(responseData => {
            const postsArray: Post[] = [];
            for (const key in responseData) {
                if(responseData.hasOwnProperty(key)) {
                    postsArray.push({ ...responseData[key], id: key });
                }
            }
            return postsArray;
        })
        );
    }
}