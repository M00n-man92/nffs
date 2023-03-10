// css classs 
import PinterstLayout from "../../../example/pinterestlayout";
import "../../../styles/profile/favorite/favorite.scss"
import ProfileSideNav from "../sidenav";

import { blogs } from "../../pages/blog/data";

export default function UserFavorite() {
  return (
    <div className="userlikeditems">
      <ProfileSideNav page={"favorite"} />
      <div className="userfavorites">
        <div className="userfavoritesheader">
          <div className="userfavoritedivider">
            <span className="userfavoritetitle">Favorite</span>
          </div>
        </div>
        <div className="userfavoritemiddle">
          {/* <div className="userhasnofavorites">
            <span style={{ height: "100%" }}>You don't have any favorite products yet!</span>

          </div> */}
           <div className="favpinterestlayout">
            <PinterstLayout cards={blogs} linker="blog" blog={true} project={false} />
          </div>
 

        </div>
      </div>
    </div>
  )
}
