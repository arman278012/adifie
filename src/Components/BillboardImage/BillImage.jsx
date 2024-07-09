import React from 'react';
import "./billboard.css"

const BillImage = () => {
  return (
    <div className="pb-20  justify-center bg-black sm:pt-32 pt-0 sm:flex hidden">

      <div className="gallery ">
        <span style={{ '--i': 1 }}>
          <img src="https://media.istockphoto.com/id/525568423/photo/london-piccadilly-during-night.jpg?s=612x612&w=0&k=20&c=mBHnao0BnbANC1h2E-rOJ_tSviC7jTw9ir4tfp1V6uI=" alt="" />
        </span>
        <span style={{ '--i': 2 }}>
          <img src="https://www.gingermediagroup.com/wp-content/uploads/2023/08/Screenshot-2023-08-22-160223.jpg" alt="" />
        </span>
        <span style={{ '--i': 3 }}>
          <img src="https://www.design-lab.co.in/images/portfolio/Magazine/21.jpg" alt="" />
        </span>
        <span style={{ '--i': 4 }}>
          <img src="https://imgv3.fotor.com/images/blog-cover-image/cocacola-ads-example-with-orange-background-slogan.png" alt="" />
        </span>
        <span style={{ '--i': 5 }}>
          <img src="https://www.creatopy.com/blog/wp-content/uploads/2019/01/creative-advertising-ideas-2.png" alt="" />
        </span>
        <span style={{ '--i': 6 }}>
          <img src="https://www.myhoardings.com/ads/wp-content/uploads/2021/02/de6dr78-4c772bfb-7b6b-4999-aac5-1d2b95df91c1.jpg" alt="" />
        </span>
        <span style={{ '--i': 7 }}>
          <img src="https://blueatlas-13bc3.kxcdn.com/wp-content/uploads/2018/05/digital-advertising-1.jpg" alt="" />
        </span>
        <span style={{ '--i': 8 }}>
          <img src="https://www.marketingdonut.co.uk/sites/default/files/advertising-strategy-faqs329911091.jpg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default BillImage;
