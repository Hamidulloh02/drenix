import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import "./index.css"
import './assets/global.css'

import App from './App';
import HomePage from './Pages/HomePage';
import BlockPage from './Pages/BlockPage';
import ServesSMM from './Pages/Servise/ServersSmm/ServesSMM';
import ServesWeb from './Pages/Servise/ServersWeb/ServesWeb';
import ServesBranding from './Pages/Servise/ServesBranding/ServesBranding';
import VMain from './Pages/Servise/VideoProduction/VMain';
import Logo from './Pages/Servise/Logo/Logo';
import BlogInfo from './Components/BlogInfo';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/blockpage' element={<BlockPage/>}/>
          <Route path='/serves-web' element={<ServesWeb/>}/>
          <Route path='/serves-smm' element={<ServesSMM/>}/>
          <Route path='/serves-branding' element={<ServesBranding/>}/>
          <Route path='/serves-video' element={<VMain/>}/>
          <Route path='/serves-logo' element={<Logo/>}/>
          <Route path='/blog-info' element={<BlogInfo/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
);

  // import React from "react";
  // import { createRoot } from 'react-dom/client';
  // import i18n from "i18next";
  // import { useTranslation, initReactI18next } from "react-i18next";

  // import LanguageDetector from 'i18next-browser-languagedetector';
  // import HttpApi from 'i18next-http-backend';

  // i18n
  //   .use(initReactI18next)
  //   .use(LanguageDetector)
  //   .use(HttpApi)
  //   .init({
  //     fallbackLng: "ru",
  //     detection :{
  //       order: ['htmlTag','cookie', 'localStorage',   'path', 'subdomain'],
  //     },
  //     backend:{
  //       loadPath: '/assest/locales/{{lng}}/translation.json',
  //     },
  //     react:{useSuspense:false}
  //   });

  // function App() {
  //   const { t } = useTranslation();

  //   return <h2>{t('welcome_to_React')}</h2>;
  // }

  // // append app to dom
  // const root = createRoot(document.getElementById('root'));
  // root.render(
  //   <App />
  // );


