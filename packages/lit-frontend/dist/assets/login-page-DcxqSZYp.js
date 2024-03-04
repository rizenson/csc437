import{i as d,s as c,S as g,a as l,x as p,t as u}from"./rest-B5Dj_62W.js";var m=Object.defineProperty,h=Object.getOwnPropertyDescriptor,f=(e,t,s,a)=>{for(var o=a>1?void 0:a?h(t,s):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(a?r(t,s,o):r(o))||o);return a&&o&&m(t,s,o),o};let i=class extends c{constructor(){super(...arguments),this._show=!1,this.abc=this.darkMode()}darkMode(){var s;let e=new g,t=(s=document.cookie.split("; ").find(a=>a.startsWith("darkMode=")))==null?void 0:s.split("=")[1];e.setDarkMode(!!(t&&t=="true"))}getData(){var t,s,a;let e=new Map;return e.set("name",((t=document.getElementsByTagName("login-page")[0].shadowRoot)==null?void 0:t.children[1].getElementsByClassName("name")[0]).value),e.set("userid",((s=document.getElementsByTagName("login-page")[0].shadowRoot)==null?void 0:s.children[1].getElementsByClassName("username")[0]).value),e.set("password",((a=document.getElementsByTagName("login-page")[0].shadowRoot)==null?void 0:a.children[1].getElementsByClassName("password")[0]).value),e}login(){const e=this.getData();fetch(l(`/profile/${e.get("userid")}`),{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>t.status===200?t.json():null).then(t=>{t&&(console.log(t.password),t.password==e.get("password")?(document.cookie="userid="+e.get("userid"),window.location.href="profile.html"):document.getElementsByTagName("login-page")[0].shadowRoot.getElementById("incorrect").style.display="grid")}).catch(t=>console.log("Failed to POST form data",t))}signUp(){const e=this.getData();let t=new Date;e.set("dateCreated",("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)+"-"+t.getFullYear()),e.set("numGamesStarted",0),e.set("numGamesCompleted",0),e.set("averageTime",0),e.set("longestNoHintStreak",0),e.set("longestWinStreak",0),e.set("currentWinStreak",0),fetch(l("/profiles"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(s=>s.status===200?s.json():null).then(s=>{s&&console.log("PUT request successful:",s)}).catch(s=>console.log("Failed to POST form data",s)),document.cookie="userid="+e.get("userid"),window.location.href="profile.html"}render(){return p`<body>
      <div class="center">
        <p class="title">PROJECTIVE SET</p>
      </div>
      <div class="log-in-body">
        <p class="title">Log In or Sign Up</p>
        <label>Name:</label>
        <input type="text" class="name" /><br />
        <label>Username:</label>
        <input type="text" class="username" /><br />
        <label>Password:</label>
        <input type="text" class="password" /><br />
        <button @click=${this.login}>Log In</button>
        <button @click=${this.signUp}>Sign Up</button>
      </div>
      <div id="incorrect" class="incorrect">Incorrect username or password</div>
    </body>`}};i.styles=d`
    .log-in-body {
      text-align: center;
      width: 100%;
      height: 100%;
      margin-top: 8%;
    }

    .title {
      font-size: 40px;
    }

    label {
      margin-right: 10px;
      font-size: 30px;
    }

    input {
      border-radius: 5px;
      margin-bottom: 20px;
    }
    .title {
      font-size: 50px;
      margin-bottom: 1%;
      margin-top: 2%;
    }

    .center {
      text-align: center;
    }

    button {
      border: 2px solid black;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      width: 100px;
      height: 25px;
      display: inline;
      border-radius: 5px;
      padding: 0;
    }

    .incorrect {
      padding-top: 2%;
      text-align: center;
      color: red;
      display: none;
    }
  `;i=f([u("login-page")],i);
