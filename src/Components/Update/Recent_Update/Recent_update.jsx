import React, { useEffect } from 'react';
import './Recentstyle.css'
import $ from 'jquery'



export default function Recent_update() {

    useEffect(() => {

        function getPageList(totalPages, page, maxLength) {
            if (maxLength < 5) throw "maxLength must be at least 5";

            function range(start, end) {
                return Array.from(Array(end - start + 1), (_, i) => i + start);
            }

            var sideWidth = maxLength < 9 ? 1 : 2;
            var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
            var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
            if (totalPages <= maxLength) {
                // no breaks in list
                return range(1, totalPages);
            }
            if (page <= maxLength - sideWidth - 1 - rightWidth) {
                // no break on left of page
                return range(1, maxLength - sideWidth - 1)
                    .concat([0])
                    .concat(range(totalPages - sideWidth + 1, totalPages));
            }
            if (page >= totalPages - sideWidth - 1 - rightWidth) {
                // no break on right of page
                return range(1, sideWidth)
                    .concat([0])
                    .concat(
                        range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
                    );
            }
            // Breaks on both sides
            return range(1, sideWidth)
                .concat([0])
                .concat(range(page - leftWidth, page + rightWidth))
                .concat([0])
                .concat(range(totalPages - sideWidth + 1, totalPages));
        }

        $(function () {
            // Number of items and limits the number of items per page
            var numberOfItems = $("#jar .content").length;
            var limitPerPage = 5;
            // Total pages rounded upwards
            var totalPages = Math.ceil(numberOfItems / limitPerPage);
            // Number of buttons at the top, not counting prev/next,
            // but including the dotted buttons.
            // Must be at least 5:
            var paginationSize = 7;
            var currentPage;

            function showPage(whichPage) {
                if (whichPage < 1 || whichPage > totalPages) return false;
                currentPage = whichPage;
                $("#jar .content")
                    .hide()
                    .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
                    .show();
                // Replace the navigation items (not prev/next):
                $(".pagination li").slice(1, -1).remove();
                getPageList(totalPages, currentPage, paginationSize).forEach(item => {
                    $("<li>")
                        .addClass(
                            "page-item " +
                            (item ? "current-page " : "") +
                            (item === currentPage ? "active " : "")
                        )
                        .append(
                            $("<a>")
                                .addClass("page-link")
                                .attr({
                                    href: "javascript:void(0)"
                                })
                                .text(item || "...")
                        )
                        .insertBefore("#next-page");
                });
                return true;
            }

            // Include the prev/next buttons:
            $(".pagination").append(
                $("<li>").addClass("page-item").attr({ id: "previous-page" }).append(
                    $("<a>")
                        .addClass("page-link")
                        .attr({
                            href: "javascript:void(0)"
                        })
                        .text("Prev")
                ),
                $("<li>").addClass("page-item").attr({ id: "next-page" }).append(
                    $("<a>")
                        .addClass("page-link")
                        .attr({
                            href: "javascript:void(0)"
                        })
                        .text("Next")
                )
            );
            // Show the page links
            $("#jar").show();
            showPage(1);

            // Use event delegation, as these items are recreated later
            $(
                document
            ).on("click", ".pagination li.current-page:not(.active)", function () {
                return showPage(+$(this).text());
            });
            $("#next-page").on("click", function () {
                return showPage(currentPage + 1);
            });

            $("#previous-page").on("click", function () {
                return showPage(currentPage - 1);
            });
            $(".pagination").on("click", function () {
                $("html,body").animate({ scrollTop: 0 }, 0);
            });
        });

    }, [$]);

    return <div>
        <div className="Recentbgupdateher">
            <div className="container" id="jar">

                <div className="innderdivheading">
                    <div className="headingplusline">

                        <div class="Headingrecent">Recent Updates ⬇️</div>

                        <div class="underline">      </div>
                    </div>
                    <div class="inputhereholde">
                        <form class="elementor-search-form">
                            <div class="Searchherere">
                                <input placeholder="Search Posts..." class="inputSearch" type="search" name="s" title="Search" />
                                <button class="btn searchbtn" type="submit" title="Search" aria-label="Search">
                                    <i aria-hidden="true" class="fas fa-search"></i> <span class="elementor-screen-only">Search</span>
                                </button></div></form>
                    </div>


                </div>

                <div className="row mt-4 ">
                    <div className="col-lg-8">


                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    List of documents needs to file Income Tax Return for tax year 2021</a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>Following list of documents is needed for salaried person to accurately file Income Tax Return for FY 21. Last date is 30th September 2021. Salary</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    ICCI announces special discounts for members </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>ICCI Members Discounts Islamabad Chamber of Commerce & Industry (ICCI) has taken discounts for its members from hospitals, laboratories, airlines, business outlets, hotels, schools and</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row mt-4 mx-auto content">
                            <div className="col-lg-12">
                                <div className="maindivcardrecent">
                                    <div className="card cardrecentupdate">
                                        <div className="card-body">
                                            <h2 class="Headingh2recent">
                                                <a href="#" className='linkcardheading'>
                                                    Got 170 Notice from FBR – What should you do? </a>
                                            </h2>
                                            <div class="Datehere">
                                                <span class="text-left">
                                                    October 1, 2021 </span>
                                            </div>

                                            <div class="Cardtextrecent"><p>170 (Application for refund of tax paid in excess) When do you receive 170 notice from FBR? Why you got 170 notice from FBR? What</p></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <nav className='mt-5'>
                            <ul class="pagination justify-content-center pagination-sm">
                            </ul>
                        </nav>

                    </div>

                    <div className="col-lg-4">
                        <div className="colimgdiv2">
                            <div className="messengerimg">

                                <a target="_blank" href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F764212430374489%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink">

                                    <img src="company-registration-islamabad.jpg" className='imgtaxlahore' width="100%" alt="" />


                                </a>

                            </div>
                        </div>

                        <div className="row stickhere">
                            <div className="col-lg-12">
                                <div className="colimgdiv2">
                                    <div class="boxtexthere">
                                        <h2 class="box_texthere">Business Registration Service in Pakistan. Now starting at Rs 15,000.</h2>
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-lg-12">
                                        <div className="colimgdiv2">
                                            <div class="Seconddivtext">
                                                <h2 class="Seconddiv_text">Become a Tax Filer starting from Rs.5000</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>


                </div>












            </div>
        </div>
    </div>;
}
