import { useState } from 'react';
import ReactModal from "react-modal";

import Form from './Forms/Form';
import FormPanelItem from './FormPanelItem';
import { ReactComponent as Idea } from '../img/idea.svg';

const FormPanelLinks = (props) => {

  const formContent = [
    {
      title: 'ތޫނޑު',
      class: 'bg-thundi',
      link: 'https://forms.gle/FDfzMtjprBPwTYB9A',
      heading: 'Development of Thoondu',
      name: 'Thoondu',
      imgTop: 'https://lh3.googleusercontent.com/n3L2pKlw_F11_E_IEcG6Gv_anU1tNfHvh5d43uE-rA_20GCVevn9HKJPa8NH7F9YlnTvfdMzQ1xMogdhBCHykXcM_BgnC6Rdbd5lmHpDEM0O9SuuTzqoW5toI1rNyhs8zw=w740',
      imgBottom: 'https://lh3.googleusercontent.com/c1C-_wHmrZ3_G3ld-nNLq3jmBeBsHL04Ns5HWPJ7Uyn_Q9VRK7M1nulk3R3Ol1JHzbnLR_eXVs7OF26u4bKt1QARMSdzdBxDsiQ4oFseA6WNvBSbCO0thY3IkwsTF1dbQg=w2000'
    },
    {
      title: 'ބަނދަރޮ ސަރަހައްދު',
      class: 'bg-harbour',
      link: 'https://forms.gle/eLQJF7M5yb2HeHf1A',
      heading: 'Develop of Harbour',
      name: 'Harbour',
      imgTop: 'https://lh4.googleusercontent.com/OyWG_yyBviKE4QaGwun718PfSKAG4XYrLhrtIQ50EDtvcIvu2RSltcGUBCx1fOq_SG87Qw9XSJ0xEMeOC3Kv_CkP5fEkgp2dAuJPHpLJIsRG1eN6_0w86LSosvRHbViHFw=w740',
      imgBottom: 'https://lh4.googleusercontent.com/PbKs5osXPwc0L7xGbMUhbKWXkH77vm7Mfg0rw4yk8xOO-Ra7EfyykRbIhgyD3mesCNpG2gpiSjVbJBOGvFUW5jpwWNhAhJy9XwOh0ELaeVvXhlge68hwammJSlJpOkbGzw=w1600'
    },
    {
      title: 'ބިޅިފޭށި',
      class: 'bg-bilhifeyshi',
      link: 'https://forms.gle/LkcKrUpFBEbrPpDU6',
      heading: 'Development of Bilhifeyshi',
      name: 'Bilhifeyshi',
      imgTop: 'https://lh3.googleusercontent.com/YEwwhQbLOx0Zgsv4Wuk_svlt01w3XPglVVkmLCcZ_lwzzpMSWBsB3Mw4USJyyojQBZkUpXwp4J0AOxfDphyz5ayNqgRtLf8rqBqPazt5-tTEe9CaW-751hY5pg2mURAcBQ=w740',
      imgBottom: 'https://lh5.googleusercontent.com/_nkMQESW4PMEfifDnHGWuh4hlcSQBRj4Z1Bxl3FfNTFSRuVzdayllrAwCgK1SPXNuX0e2GMSUYfygWjlTPUS3lxELqnAX1benP9KWWsD_bGrsh_Syw-AFrDy11EKZsXODg=w201'
    },
    {
      title: 'ރަސްމީ ބޯޅަދަނޑޮ',
      class: 'bg-rasmee-dhandu',
      link: 'https://forms.gle/w13EQMeiz1aryVQh9',
      heading: 'Development of Rasmee Boalha Dhando',
      name: 'Rasmee Boalha Dhando',
      imgTop: 'https://lh6.googleusercontent.com/bEQjTWsH6e1E4kxqpsCjzDe5H2jI2yFZBDmfu41b1f_qnXla_RW6eSkp5qXnAHh3vdw20YaIBOpTvun0-69pMyP5s8nPypf_Opv0rEe-wR7KjEz8_BYSdZVvvyUBnIOBmA=w740',

    },
    {
      title: 'ދަޑިމަގި ކިޅި / ވީދަޑޮ',
      class: 'bg-dkilhi',
      link: 'https://forms.gle/S2N9LAGqmQ99NgJ46',
      heading: 'Development of Dhadimagi Kilhi',
      name: 'Dhadimagi Kilhi',
      imgTop: 'https://lh5.googleusercontent.com/lqCv6Z94s4Twhc80ry5yVtOFbWrQs51MIn_R78581lNCJ2mk1oe442WvRF1WBdIBiTf4Z7fqtrWXlSF74quqcpi-vaxS_x44sXtVYRjShhzIoMVSEcjrFHB3xODHdAGjsQ=w740',
      imgBottom: 'https://lh5.googleusercontent.com/86polO7rb8PmVQrQ9auuB71BG4EClkrDw-0dkEnAyhLO1fduMX8WkR-49WQBVOiVtha_oTwmojI3UcUYg2bhAJyqq5q75SUJLg_vjsydz_vc-6IyBmDxEpuHvE79oDLLKg=w550'
    },
    {
      title: 'ބަންޑާރަކިޅި / ވީދަޑޮ',
      class: 'bg-bkilhi',
      link: 'https://forms.gle/vAwfZYfFR7oR3zdq6',
      heading: 'Development of Bandaara Kilhi',
      name: 'Bandaara Kilhi',
      imgTop: 'https://lh3.googleusercontent.com/61jutQGsvPDA9j7IUVxZUvbK-jyPx-D7qGQ1Wi9Ttdlo7vQw4TWh5cszeVFTU7v0pROwpnaVx8GTIGj8r33kJAv5z4_Z_SI2aDttbfkr4BU2RTyKvl7J5qVH3XMaAdBw6Q=w740',
      imgBottom: 'https://lh3.googleusercontent.com/jlPpiqgWwQa7iDBw8FhHzRNahf0IKW7INByjWQ2Teqeyh87k6r9z-tNR5CJ_QfwB3pYiWELcx4QJeQ1ewNbkREhs6iKCtmyEtXTvk8xJjKOuu0FqtcZdsDlRvOnPSJlVYw=w512'
    },
    {
      title: 'މާދަޑޮ ސްޕޯޓްސް އެރީނާ',
      class: 'bg-scomplex',
      link: 'https://forms.gle/HtoskikYoEk3SdL5A',
      heading: 'Development of Maadhado Sports Arena',
      name: 'Maadhado Sports Arena',
      imgTop: 'https://lh6.googleusercontent.com/e2yUKhsV03PdQa2A8ZS8ozbEHGX_DvdT9Lw_YlcSvKGUW_vHpPLXPI3dxZIB4WV_4RIwvRlT8kgUIbNmNiAL39Z7xAcRTX2FBAL3NVN9-DnRMRnOZ7BbIVuLJHG3wFc93g=w696',
    },
    {
      title: 'ދޫނޑިގަން ސްޕޯޓްސް އެރީނާ',
      class: 'bg-dhg-arena',
      link: 'https://forms.gle/ugrrfVCmTVwA71gZA',
      heading: 'Development of Dhoodigan Sports Arena',
      name: 'Dhoodigan Sports Arena',
      imgTop: 'https://lh3.googleusercontent.com/VXjdsXAOfC-_yQeCFLeR49tqfyce2vxLEhQMr8_z0pk80m3K5R4H2TsoKKnISH2noAKjfFOWXuj18cu1D6jKQYFEbEWLGC7p28Qk-haFoINl8GJVQRv_0IiMo94IiRPpng=w722',

    },
    {
      title: 'ދަޑިމަގޮ ސްޕޯޓްސް އެރީނާ',
      class: 'bg-dha-arena',
      link: 'https://forms.gle/5iUwWxVeQcFsuEv56',
      heading: 'Development of Dhadimagi Sports Arena',
      name: 'Dhadimagi Sports Arena',
      imgTop: 'https://lh6.googleusercontent.com/XKwTJfQ_dn5mRGovHo1vbmAZ4GAHZ4MLD4a7sltxKMVRizSHmc6Zvd5GZWKMtctPzjMxd3R5bCf61a5c-IMb1XNWDlJzcfpB3CkIN5S6axdAfEdfnPUCtY95y5opsOJGyQ=w740',
    },
    {
      title: 'ފުވައްމުލައް ސްޓޭޑިއަމް',
      class: 'bg-stadium',
      link: 'https://forms.gle/mse5iMy8H5tvc1W97',
      heading: 'Development of Fuvahmulah Stadium',
      name: 'Fuvahmulah Stadium',
      imgTop: 'https://lh6.googleusercontent.com/ZbxWas0TP3-o5CvBycMhACChoq3SVDJdbDAvxggir21fdoveeTJXSG4gnDikAxYh-zEdOBeKJqWXgvGzk35zT6r8E__ee0-rCoaVsykFFIBZXDc8LXjArQRvqjt24glW9Q=w740'

    },
    {
      title: 'ކަނދޮވަލި ދަޑޮ',
      class: 'bg-kandhoval',
      link: 'https://forms.gle/4pPRpp5M9i24qAiH9',
      heading: 'Development of Kandhovali Dhado',
      name: 'Kandhovali Dhado',
      imgTop: 'https://lh3.googleusercontent.com/0OlKPCL0FXSetIPzve9k7NAWHXCFd_PAcBhLJpobvk1WrCFA88vme8Tt1Bb7_-_q3saKjGgcoESFqKqE2Phd6xIfAdtHhML1VqkBjpMJN3ZmMZZxQfvFmoyLlC4RfPtcmw=w714'
    }
  ]

  return (
    <div className='lg:px-52 sm:px-6 px-2 sm:grid sm:grid-cols-3 block flex flex-col font-waheed leading-relaxed'>
      {formContent.map((content, i) => {
        if ((formContent.length - 2) === i) {
          return <div
            key={content.title}
            className='col-span-2'>
            <FormPanelItem
              content={content}

            />
          </div>
        }
        else {
          return <div
            key={content.title}
          >
            <FormPanelItem
              content={content}
            />
          </div>
        }

      })}
    </div >
  )
}

export default FormPanelLinks;