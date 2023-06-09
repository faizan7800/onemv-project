import React from "react";
import Navbar from "./Navbar";
import "./Frontpage.css";
import PictureCard from "./PictureCard";

function Frontpage() {
  return (
    <div className="frontpage">
      <Navbar />
      <div className="frontpage__flexTwo">
        <div>
          <PictureCard
            pic="/images/1.png"
            w={850}
            h="900"
            title="TBD 22nd Avenue Alexandria MN 56308"
            price="596,000"
          />
        </div>
        <div>
          <div>
            <PictureCard
              pic="/images/2.png"
              w={498}
              h="448"
              title="34th Avenue Alexandria MN 56308"
              price="1,305,000"
            />
          </div>
          <div style={{ marginTop: "-4px" }}>
            <PictureCard
              pic="/images/3.png"
              w={498}
              h="452"
              title="McKay Avenue Alexandria MN 56308"
              price="652,000"
            />
          </div>
        </div>
      </div>
      <div className="frontpage__flexThree">
        <PictureCard
          pic="/images/4.png"
          w={449}
          h="350"
          title="McKay Avenue Alexandria MN 56308"
          price="652,000"
        />
        <PictureCard
          pic="/images/5.png"
          w={449}
          h="350"
          title="McKay Avenue Alexandria MN 56308"
          price="652,000"
        />
        <PictureCard
          pic="/images/6.png"
          w={449}
          h="350"
          title="McKay Avenue Alexandria MN 56308"
          price="652,000"
        />
      </div>
      <div className="frontpage__flexTwo" style={{ marginTop: "-4px" }}>
        <div>
          <div>
            <PictureCard
              pic="/images/7.png"
              w={498}
              h="448"
              title="TBD 22nd Avenue Alexandria MN 56308"
              price="596,000"
            />
          </div>

          <div style={{ marginTop: "-4px" }}>
            <PictureCard
              pic="/images/8.png"
              w={498}
              h="452"
              title="McKay Avenue Alexandria MN 56308"
              price="652,000"
            />
          </div>
        </div>
        <div>
          <PictureCard
            pic="/images/9.png"
            w={850}
            h="900"
            title="34th Avenue Alexandria MN 56308"
            price="596,000"
          />
        </div>
      </div>
      <div className="frontpage__flexThree">
        <PictureCard
          pic="/images/10.png"
          w={449}
          h="350"
          title="McKay Avenue Alexandria MN 56308"
          price="652,000"
        />
        <PictureCard
          pic="/images/11.png"
          w={449}
          h="350"
          title="McKay Avenue Alexandria MN 56308"
          price="652,000"
        />
        <PictureCard
          pic="/images/12.png"
          w={449}
          h="350"
          title="McKay Avenue Alexandria MN 56308"
          price="652,000"
        />
      </div>
      <div className="footerContent">
        <p>
          <strong>
            612-400-9000 | info@1mw.com | 1mw Strategy | Coldwell Banker Realty
            | About | LinkedIn | Instagram | Facebook
          </strong>
          &nbsp;| Wayzata MN | Chicago IL | Privacy | Agency Relationships | The
          data relating to real estate for sale on this website is based on
          information submitted to the MLS Grid. Supplied Open House Information
          is subject to change without notice. All information should be
          independently reviewed and verified for accuracy. Properties may or
          may not be listed by the office/agent presenting the information. Some
          IDX listings have been excluded from this website. By searching
          Northstar MLS listings you agree to the Northstar MLS End User License
          Agreement. Equal Housing Opportunity. Coldwell Banker logos are
          trademarks of Coldwell Banker LLC. NONMLS.com, Wilen, 1MW are
          trademarks of MN Real Estate Inc. Licensed in MN and IL.
        </p>
      </div>
    </div>
  );
}

export default Frontpage;
