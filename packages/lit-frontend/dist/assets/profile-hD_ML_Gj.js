import{i as c,s as p,x as h,a as u,t as f}from"./rest-BNxykyPA.js";import"./login-page-C3EBPTX8.js";import{n as g,r as m}from"./user-profile-mG5qb9Ws.js";var b=Object.defineProperty,x=Object.getOwnPropertyDescriptor,d=(e,t,r,i)=>{for(var s=i>1?void 0:i?x(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(s=(i?n(t,r,s):n(s))||s);return i&&s&&b(t,r,s),s};let o=class extends p{constructor(){super(...arguments),this.path=`/profile/${this.getUserId()}`}getUserId(){var e;return(e=document.cookie.split("; ").find(t=>t.startsWith("userid=")))==null?void 0:e.split("=")[1]}render(){const e=this.profile||{userid:"",name:""},{dateCreated:t,numGamesStarted:r,numGamesCompleted:i,averageTime:s,longestNoHintStreak:a,longestWinStreak:n,currentWinStreak:l}=e;return h`
      <section>
        <table>
          <tr>
            <td>User Since</td>
            <td class="test">${t}</td>
          </tr>
          <tr>
            <td>Number of Games Started</td>
            <td class="test">${r}</td>
          </tr>
          <tr>
            <td>Number of Games Completed</td>
            <td class="test">${i}</td>
          </tr>
          <tr>
            <td>Average Time to Find a Set</td>
            <td class="test">${s} sec</td>
          </tr>
          <tr>
            <td>Longest No Hint Streak</td>
            <td class="test">${a}</td>
          </tr>
          <tr>
            <td>Longest Win Streak</td>
            <td class="test">${n}</td>
          </tr>
          <tr>
            <td>Current Win Streak</td>
            <td class="test">${l}</td>
          </tr>
        </table>
        <div>
          <button @click=${this.returnHome}>Return Home</button>
          <button @click=${this.logout}>Log Out</button>
        </div>
      </section>
    `}returnHome(){window.location.href="/"}logout(){document.cookie="userid=''",window.location.href="/"}_fetchData(e){fetch(u(e)).then(t=>t.status===200?t.json():null).then(t=>{t&&(this.profile=t)})}connectedCallback(){console.log(this.path),this.path&&this._fetchData(this.path),super.connectedCallback()}attributeChangedCallback(e,t,r){e==="path"&&t!==r&&t&&this._fetchData(r),super.attributeChangedCallback(e,t,r)}};o.styles=[c`
      table {
        width: 65%;
        text-align: center;
        padding-left: 35%;
        font-size: larger;
        line-height: 45px;
      }
      td {
        text-align: left;
      }
      .test {
        text-align: right;
      }
      button {
        border: 2px solid black;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        width: 200px;
        height: 50px;
        display: inline;
        border-radius: 10px;
        padding: 0;
        font-family: "JetBrains Mono";
      }
      div {
        text-align: center;
      }
    `];d([g()],o.prototype,"path",2);d([m()],o.prototype,"profile",2);o=d([f("user-statistics")],o);
