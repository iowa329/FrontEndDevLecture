<template>
  <div>
    <img :src="user.photoURL" v-if="user" />
    <button type="button" @click="logout" v-if="user">로그아웃</button>
    <button type="button" @click="login('google')" v-if="!user">Google 로그인</button>
    <button type="button" @click="login('github')" v-if="!user">Github 로그인</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseApp from './firebaseApp.js'

export default {
  name: 'Home',
  data: function() {
    return {
      user: null
    }
  },
  methods: {
      login(service) {
        let provider;
        if (service == 'google') 
          provider = new firebase.auth.GoogleAuthProvider();
        else if (service == 'github')
          provider = new firebase.auth.GithubAuthProvider();
        firebaseApp.auth()
          .signInWithPopup(provider)
          .then((result) => {
            console.log(result);
            this.user = result.user;
          })
          .catch((error) => {
            alert("로그인 실패 " + error.message)
            console.log(error);
          });
      },
      logout() {
        firebaseApp.auth().signOut()
        .then(() => { this.user = null; })
        .catch((error) => { console.log(error); });
      }    
  }
}
</script>

<style scoped>
div { text-align: center; }
button { padding: 0.5em 1.5em; margin-right: 5px; }
img { width: 100px; height: 100px; display: block; margin: 20px auto; }
</style>