import React, { Component } from "react";
import { TechList } from "./Shared/TechList/TechList";
import { SiteList } from "./Shared/SiteList/SiteList";

export class About extends Component {
  render() {
    const title = "정보.";
    const description = "안녕하세요 ReactMemo 사이트입니다.";
    return (
      <>
        <h2>{title}</h2>
        <h3>{description}</h3>

        <p>이 사이트는 React 학습을 위한 데모 사이트입니다</p>
        <p>학습이 완료된 후에 현재 사이트가 만들어집니다</p>

        <hr className="mb-5 mt-5" />

        <div className="row">
          <div className="col-md-6">
            <div className="thumbnail">
              <img
                src="http://placeimg.com/640/480/any"
                alt="profile"
                className="img-fluid"
              />
              <i>Photo by http://placeimg.com</i>
            </div>
          </div>
          <div className="col-md-6">
            <div className="thumbnail">
              <img
                src="http://unsplash.it/640/480/?random"
                alt="profile"
                className="img-fluid"
              />
              <i>Photo by http://unsplash.it</i>
            </div>
          </div>
        </div>

        <hr className="mb-5 mt-5" />

        <div className="row">
          <div className="col-md-6">
            <h3>
              <i className="fa fa-wrench"></i> 현재 사이트에서 사용된 기술리스트
            </h3>
            <TechList></TechList>
          </div>
          <div className="col-md-6">
            <h3>
              <i className="fa fa-sitemap"></i> 현재 사이트와 관련된 추천사이트
            </h3>
            <SiteList></SiteList>
          </div>
        </div>
      </>
    );
  }
}
