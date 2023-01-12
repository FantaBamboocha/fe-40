"use strict";

/* Результатом работы вашей функции должен быть массив пользователей. 
У каждого объекта пользователя должно появиться поле myPosts: [<в этом массиве будут посты, 
    которые сделал этот пользователь>]. Поле - массив, так как у одного пользователя может быть более 1-го поста.
 */

const POSTS_REQUEST = "https://jsonplaceholder.typicode.com/posts";
const USERS_REQUEST = "https://jsonplaceholder.typicode.com/users";

const getData = async () => {
  try {
    const postsListRequest = await fetch(POSTS_REQUEST).then((response) =>
      response.json()
    );

    const usersListRequest = await fetch(USERS_REQUEST).then((response) =>
      response.json()
    );

    const [postsList, usersList] = await Promise.all([
      postsListRequest,
      usersListRequest,
    ]);

    const assotiateUsersAndPosts = (postsList, usersList) => {
      const idAndPostsMap = new Map();

      postsList.forEach(({ userId, title }) => {
        if (!idAndPostsMap.has(userId)) {
          idAndPostsMap.set(userId, [title]);
        } else {
          const arrayOfPosts = idAndPostsMap.get(userId);
          arrayOfPosts.push(title);
        }
      });

      const result = usersList.map((user) => ({
        ...user,
        myPosts: idAndPostsMap.get(user.id),
      }));

      console.log(result);
    };

    assotiateUsersAndPosts(postsList, usersList);
  } catch (error) {
    console.log(error);
  }
};

getData();
