import React, { Component } from "react";
import { ContactDetails } from "./ContactDetails/ContactDetails";
import { TechList } from "./Shared/TechList/TechList";
import { SiteList } from "./Shared/SiteList/SiteList";

export class Contact extends Component {
  render() {
    const title = "연락처.";
    const description = "ReactMemo 사이트입니다";
    return (
      <div>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <ContactDetails></ContactDetails>

        <hr className="m-4"/>

        <div className="alert alert-warning alert-dismissable">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-hidden="true"
          >
          </button>
          이 사이트 제작을 위한 모든 단계는 <strong>데브렉</strong>에서 동영상
          강좌로 제공됩니다. 관심있으신 분들은{" "}
          <a href="http://www.devlec.com" className="alert-link">
            데브렉사이트
          </a>
          를 참고하시기바랍니다
        </div>

        <hr className="m-4"/>

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

      </div>
    );
  }
}
