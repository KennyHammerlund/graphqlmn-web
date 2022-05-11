import Helmet from "react-helmet";
import React from "react";

export const MailchimpSignup = () => {
  return (
    <>
      <Helmet>
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css"
          rel="stylesheet"
          type="text/css"
        >
          {/* <style type="text/css">

    </style>  */}
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          ></script>
        </link>
      </Helmet>
      <div id="mc_embed_signup">
        <form
          action="https://graphqlmn.us14.list-manage.com/subscribe/post?u=c5b58d13f1ba720b48ce79138&amp;id=2b9f0a597d"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div class="indicates-required">
              <span class="asterisk">*</span> indicates required
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL">
                Email Address <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
              />
            </div>
            <div id="mce-responses" class="clear foot">
              <div
                class="response"
                id="mce-error-response"
                style="display:none"
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style="display:none"
              ></div>
            </div>
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input
                type="text"
                name="b_c5b58d13f1ba720b48ce79138_2b9f0a597d"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="optionalParent">
              <div class="clear foot">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
                <p class="brandingLogo">
                  <a
                    href="http://eepurl.com/h0y8c9"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
