import React from "react";
import Skeleton from "react-loading-skeleton";
import "./style/BadgesList.css";

const SkeletonItem = () => {
  return (
    <React.Fragment>
      {/* 1 */}
      <div className="container List mb-5">
        <div className="list-unstyled">
          <div className="BadgesListItem mt-5">
            <div className="col-5">
              <div className="d-flex justify-content-center mt-1">
                <Skeleton circle={true} height={100} width={100}></Skeleton>
              </div>
            </div>
            <div className="col-7">
              <div style={{ padding: "1em" }}>
                <Skeleton count={3}></Skeleton>
              </div>
            </div>
          </div>
          <div className="BadgesListItem mt-5">
            <div className="col-5">
              <div className="d-flex justify-content-center mt-1">
                <Skeleton circle={true} height={100} width={100}></Skeleton>
              </div>
            </div>
            <div className="col-7">
              <div style={{ padding: "1em" }}>
                <Skeleton count={3}></Skeleton>
              </div>
            </div>
          </div>
          <div className="BadgesListItem mt-5">
            <div className="col-5">
              <div className="d-flex justify-content-center mt-1">
                <Skeleton circle={true} height={100} width={100}></Skeleton>
              </div>
            </div>
            <div className="col-7">
              <div style={{ padding: "1em" }}>
                <Skeleton count={3}></Skeleton>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default SkeletonItem;
