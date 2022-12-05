npm create vite
> Project name: tutorialts1
> React
> TypeScript
cd tutorialts1
echo "# tutorialtypescript2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/patcoston/tutorialtypescript2.git
git push -u origin main
npm i
npm run dev
http://127.0.0.1:5173/
npm i @mui/material @emotion/react @emotion/styled
npm i @mui/x-data-grid @mui/icons-material
npm i react-router-dom@6 formik yup
npm i @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list
npm i @nivo/core @nivo/pie @nivo/line @nivo/bar @nivo/geo
npm i react-pro-sidebar@0.7.1 <-- newer version breaks tutorial

https://mui.com/
https://mui.com/material-ui/material-icons/
https://nivo.rocks/
https://github.com/azouaoui-med/react-pro-sidebar
https://formik.org/docs/overview#installation
https://github.com/jquense/yup
https://fullcalendar.io/
https://fonts.google.com/
Source Sans Pro
Regular 400
SemiBold 600
Bold 700
(*) Import
Copy/Paste into index.css
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');


Snippets
https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
rafce
import React from 'react'

const Dashboard = () => {
  return <div>Dashboard</div>
}

export default Dashboard




