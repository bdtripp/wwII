import React from 'react';

export default class NationalArchiveTemplate extends React.Component {
  render() {
    return (
      <div id='background-gradient'>
        <div class="wrapper section-theme ">
          <a class="back-to-top" href="#page-header" style="display: none;">Top</a>  
          <div id="skip-link">
            <a href="#main-col" class="element-invisible element-focusable">Skip to main content</a>
          </div>

      <div class="wrapper section-theme">
        <header id="page-header">

          <div class="region region-header">
          <section id="block-block-53" class="block block-block clearfix">


        <div class="col-sm-6" id="logo-wrapper">
          <div id="logo"><a href="/">The U.S. National Archives Home</a></div>   
          <button id="nav-toggle" class="navbar-toggle" type="button"><span style='position: absolute; right: 9999999px;'>Menu</span></button>
      </div>
      <div class="col-sm-6" id="search-wrapper">
          <div id="top-links">
              <a class="noBorder" href="">Blogs</a> &middot;
              <a class="addthisLink" onclick="return addthis_sendto();"
                 onmouseover="return addthis_open(this, '', '[URL]', '[TITLE]');"
                 onmouseout="addthis_close();"
                 onblur="addthis_close();"
                 href="">Bookmark/Share</a> &middot;

              <script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js" async="async"></script>

              <a href="">Contact Us</a>

          </div>
              <div class="input-group" id="site-search">
              <form action="https://search.archives.gov/search" method="get" name="search">
                  <input class="form-control" id="qt" accesskey="s" type="text"
                         name="query" placeholder="Search Archives.gov" title="Search Archives.gov"/>
                  <span class="input-group-btn">
                      <button class="btn btn-default" id="go" type="submit" name="submit">Search</button>
                 </span>
                 <input type="hidden" value="" name="utf8" />
                 <input id="affiliate" type="hidden" value="national-archives" name="affiliate" />
              </form>
          </div>

      </div>

      </section>
        </div>
        </header>
          <nav id="main-nav" class="clearfix ">
            <h2 class="element-invisible">Main menu</h2>
            <ul id="main-menu-links" class="links clearfix make-eq">
              <li class="menu-859 first research">
                <a href="" title="Explore our nation&#039;s history through our documents, photographs, and records." id="research">Research Our Records</a>
              </li>
              <li class="menu-860 veterans">
                <a href="" title="Request military records and learn about other services for yourself or a family member." id="veterans" class="veterans">Veterans&#039; Service Records</a>
              </li>
              <li class="menu-861 teachers">
                <a href="" title="Engage students with lesson plans and other classroom materials." id="teachers" class="teachers">Educator Resources</a>
              </li>
              <li class="menu-862 locations">
                <a href="" title="Plan a trip to a facility near you or learn about our national network of locations and services." id="locations" class="locations">Visit Us</a>
              </li>
              <li class="menu-367 last shop">
                <a href="" title="Order books, gift items, photographic prints, and document reproductions online." id="shop" class="shop">America&#039;s Founding Documents</a>
              </li>
            </ul>    
        </nav>

      <div class='page-body-wrapper'>
        <div id="page-body" class="no-sidebar">
          <header id="title-bar">
            <p>World War II Soldier Surveys</p>
            <div class="breadcrumb">
              <a href="">Home</a> &gt; <a href="">World War II</a> &gt; World War II Soldier Surveys            
            </div>
          </header>
          <div class="row">
            {this.props.children}
          </div>
        </div>
      </div> 
        <footer id="page-footer">

                <section id="sub-footer">
                  <div class="region region-footer-bottom">
          <section id="block-block-54" class="block block-block clearfix">








      <h2>





       <a href="https://www.archives.gov/social-media/">Connect With Us</a></h2>







      <ul class="clearfix" id="social-media">





       <li class="facebook" data-original-title="Facebook" data-placement="bottom" data-toggle="tooltip" title="">




        <a href="/social-media/facebook">Facebook</a></li>





       <li class="twitter" data-original-title="Twitter" data-placement="bottom" data-toggle="tooltip" title="">




        <a href="/social-media/twitter">Twitter</a></li>





       <li class="instagram" data-original-title="Instagram" data-placement="bottom" data-toggle="tooltip" title="">




        <a href="/social-media/instagram">Instagram</a></li>





       <li class="tumblr" data-original-title="Tumblr" data-placement="bottom" data-toggle="tooltip" title="">




        <a href="/social-media/tumblr">Tumblr</a></li>





       <li class="youtube" data-original-title="YouTube" data-placement="bottom" data-toggle="tooltip" title="">




        <a href="/social-media/youtube">YouTube</a></li>





       <li class="blogs" data-original-title="Blogs" data-placement="bottom" data-toggle="tooltip" title="">




        <a href="/social-media/blogs">Blogs</a></li>





       <li class="flickr" data-original-title="Flickr" data-placement="bottom" data-toggle="tooltip" title="">




        <a href="/social-media/flickr">Flickr</a></li>





      </ul>




      <p>


      </p>




      <p id="footer-links">





       <a href="/contact/">Contact Us</a> · 





       <a href="/global-pages/accessibility.html">Accessibility</a> · 





       <a href="/global-pages/privacy.html">Privacy Policy</a> · 





       <a href="/foia/">Freedom of Information Act</a> · 





       <a href="/eeo/policy/complaint-activity.html">No FEAR Act</a> · 





       <a href="http://www.usa.gov/">USA.gov</a></p>







      <p id="footer-phone">The U.S. National Archives and Records Administration<br />













       <a href="tel:1-866-272-6272">1-86-NARA-NARA or 1-866-272-6272</a></p>

      </section>
        </div>
            </section>
            </footer>

      </div>

      <script src="/sites/all/themes/nara/scripts/jquery.fancybox.pack.js" type="text/javascript"></script> 
      <script src="/sites/all/themes/nara/scripts/helpers/jquery.fancybox-media.js" type="text/javascript"></script> 
      <script src="/sites/all/themes/nara/scripts/helpers/jquery.fancybox-thumbs.js" type="text/javascript"></script> 
        <script src="https://www.archives.gov/files/js/js_MRdvkC2u4oGsp5wVxBG1pGV5NrCPW3mssHxIn6G9tGE.js"></script>
        </div>
        <a class="back-to-top" href="#page-header" style="display: inline;">Top</a>
      </div> 
    );
  }
}
