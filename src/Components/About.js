import React from 'react'

function About() {
  return (
    <div id='about'>
      <section className='aboutSection'>
        <img className='portraitPhoto' src='https://i.ibb.co/k6z3kzv/portrait.jpg'/>
        <div className='aboutInnerDiv'>  
            <p className='aboutText'>My name is Isaac Ruiz and my proudest trait is that I make an effort to be as much of a conscientious person as I can be.
            <div className='aboutTextGap'></div>
            This allows me to have a natural inclination to sincerely sympathize with a variety of “big-picture” goals that companies strive for. 
            <div className='aboutTextGap'></div> 
            With that in mind I can become a very reliable and motivated asset for all companies.</p> 
        </div>
        <div className='divider'></div>
        <div className='mySkills'>
          {/* Languages */}
          <div className='languages'>
            <h1>Languages</h1>
            <div id="codingIcons">
                {/* <!-- html icon --> */}
                <div className='iconDiv'>
                  <h4>Html</h4>
                  <img class="icons" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiNGRjU3MjIiIGQ9Ik0xIDBsMS4yNzUgMTQuNEw4IDE2bDUuNzIzLTEuNTk5TDE1IDB6Ii8+PHBhdGggZmlsbD0iI0ZBRkFGQSIgZD0iTTEyLjIzNSA0LjcwOUg1LjUyNWwuMTYgMS44MDlIMTIuMDc1bC0uNDgxIDUuNDI0TDggMTIuOTQ1bC0uMDAzLjAwMS0zLjU5Mi0xLjAwNC0uMjUxLTIuODM3aDEuNzZsLjEzMSAxLjQ3MiAxLjk1My41MzEuMDAyLS4wMDEgMS45NTUtLjUzMS4yMDQtMi4yOTFINC4wODJsLS40NzQtNS4zNDFIMTIuMzkxeiIvPjxtZXRhZGF0YT48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnJkZnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDEvcmRmLXNjaGVtYSMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+PHJkZjpEZXNjcmlwdGlvbiBhYm91dD0iaHR0cHM6Ly9pY29uc2NvdXQuY29tL2xlZ2FsI2xpY2Vuc2VzIiBkYzp0aXRsZT0iaHRtbCxsb2dvLGNvbG9yLGUiIGRjOmRlc2NyaXB0aW9uPSJodG1sLGxvZ28sY29sb3IsZSIgZGM6cHVibGlzaGVyPSJJY29uc2NvdXQiIGRjOmRhdGU9IjIwMTgtMDItMTciIGRjOmZvcm1hdD0iaW1hZ2Uvc3ZnK3htbCIgZGM6bGFuZ3VhZ2U9ImVuIj48ZGM6Y3JlYXRvcj48cmRmOkJhZz48cmRmOmxpPlBpeGVsIEljb25zPC9yZGY6bGk+PC9yZGY6QmFnPjwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC9tZXRhZGF0YT48L3N2Zz4=" alt="html icon" />
                </div>
                {/* <!-- js icon --> */}
                <div className='iconDiv'>
                  <h4>CSS</h4>
                  <img class="icons"src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMyMTk2RjMiIGQ9Ik0xIDBsMS4yNzUgMTQuNEw4IDE2bDUuNzIzLTEuNTk5TDE1IDB6Ii8+PHBhdGggZmlsbD0iI0ZBRkFGQSIgZD0iTTEyLjI3NCA0LjcwOWwtLjE2MSAxLjgwOS0uNDg2IDUuNDIzTDggMTIuOTQ0bC0uMDAzLjAwMS0zLjYyNS0xLjAwNC0uMjUzLTIuODM2aDEuNzc2bC4xMzIgMS40NzEgMS45NzEuNTMyLjAwMS0uMDAxIDEuOTc0LS41MzIuMjY5LTIuNDUxLTYuMjA4LjAxNy0uMTc2LTEuNjc2IDYuNTMzLS4wNzcuMTMyLTEuNzk0LTYuODQuMDE5LS4xMTUtMS42NjloOC44NjR6Ii8+PG1ldGFkYXRhPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6cmRmcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wMS9yZGYtc2NoZW1hIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj48cmRmOkRlc2NyaXB0aW9uIGFib3V0PSJodHRwczovL2ljb25zY291dC5jb20vbGVnYWwjbGljZW5zZXMiIGRjOnRpdGxlPSJjc3MsbG9nbyxjb2xvcixlIiBkYzpkZXNjcmlwdGlvbj0iY3NzLGxvZ28sY29sb3IsZSIgZGM6cHVibGlzaGVyPSJJY29uc2NvdXQiIGRjOmRhdGU9IjIwMTgtMDItMTciIGRjOmZvcm1hdD0iaW1hZ2Uvc3ZnK3htbCIgZGM6bGFuZ3VhZ2U9ImVuIj48ZGM6Y3JlYXRvcj48cmRmOkJhZz48cmRmOmxpPlBpeGVsIEljb25zPC9yZGY6bGk+PC9yZGY6QmFnPjwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC9tZXRhZGF0YT48L3N2Zz4=" alt="css logo" />
                </div>
                {/* <!-- css icon --> */}
                <div className='iconDiv'>
                  <h4>JavaScript</h4>
                  <img class="icons" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZD0iTTAgMGgyNTZ2MjU2SDBWMHoiIGZpbGw9IiNGN0RGMUUiLz48cGF0aCBkPSJNNjcuMzEyIDIxMy45MzJsMTkuNTktMTEuODU2YzMuNzggNi43MDEgNy4yMTggMTIuMzcxIDE1LjQ2NSAxMi4zNzEgNy45MDUgMCAxMi44OS0zLjA5MiAxMi44OS0xNS4xMnYtODEuNzk4aDI0LjA1N3Y4Mi4xMzhjMCAyNC45MTctMTQuNjA2IDM2LjI1OS0zNS45MTYgMzYuMjU5LTE5LjI0NSAwLTMwLjQxNi05Ljk2Ny0zNi4wODctMjEuOTk2TTE1Mi4zODEgMjExLjM1NGwxOS41ODgtMTEuMzQxYzUuMTU3IDguNDIxIDExLjg1OSAxNC42MDcgMjMuNzE1IDE0LjYwNyA5Ljk2OSAwIDE2LjMyNS00Ljk4NCAxNi4zMjUtMTEuODU4IDAtOC4yNDgtNi41My0xMS4xNy0xNy41MjgtMTUuOThsLTYuMDEzLTIuNThjLTE3LjM1Ny03LjM4Ny0yOC44Ny0xNi42NjctMjguODctMzYuMjU3IDAtMTguMDQ0IDEzLjc0Ny0zMS43OTIgMzUuMjI4LTMxLjc5MiAxNS4yOTQgMCAyNi4yOTIgNS4zMjggMzQuMTk2IDE5LjI0N0wyMTAuMjkgMTQ3LjQzYy00LjEyNS03LjM4OS04LjU5MS0xMC4zMS0xNS40NjUtMTAuMzEtNy4wNDYgMC0xMS41MTQgNC40NjgtMTEuNTE0IDEwLjMxIDAgNy4yMTcgNC40NjggMTAuMTQgMTQuNzc4IDE0LjYwOGw2LjAxNCAyLjU3N2MyMC40NSA4Ljc2NSAzMS45NjMgMTcuNyAzMS45NjMgMzcuODA0IDAgMjEuNjU0LTE3LjAxMiAzMy41MS0zOS44NjcgMzMuNTEtMjIuMzM5IDAtMzYuNzc0LTEwLjY1NC00My44MTktMjQuNTc0Ii8+Cgk8bWV0YWRhdGE+CgkJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpyZGZzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgoJCQk8cmRmOkRlc2NyaXB0aW9uIGFib3V0PSJodHRwczovL2ljb25zY291dC5jb20vbGVnYWwjbGljZW5zZXMiIGRjOnRpdGxlPSJqYXZhc2NyaXB0IiBkYzpkZXNjcmlwdGlvbj0iamF2YXNjcmlwdCIgZGM6cHVibGlzaGVyPSJJY29uc2NvdXQiIGRjOmRhdGU9IjIwMTctMDYtMTciIGRjOmZvcm1hdD0iaW1hZ2Uvc3ZnK3htbCIgZGM6bGFuZ3VhZ2U9ImVuIj4KCQkJCTxkYzpjcmVhdG9yPgoJCQkJCTxyZGY6QmFnPgoJCQkJCQk8cmRmOmxpPkljb24gTWFmaWE8L3JkZjpsaT4KCQkJCQk8L3JkZjpCYWc+CgkJCQk8L2RjOmNyZWF0b3I+CgkJCTwvcmRmOkRlc2NyaXB0aW9uPgoJCTwvcmRmOlJERj4KICAgIDwvbWV0YWRhdGE+PC9zdmc+Cg==" alt="javascript icon" />
                </div>
            </div>

          </div>
          {/* Frameworks */}
          <div className='frameworks'>
            <h1>Frameworks</h1>

          </div>
          {/* Developer Tools */}
          <div className='devTools'>
            <h1>Developer Tools</h1>

          </div>
        </div>
      </section>
    </div>
  )
}

export default About