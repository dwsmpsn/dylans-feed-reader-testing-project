$(function() {
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through each feed in the allFeeds object and ensures 
         * it has a URL defined and that the URL is not empty.
         */
         it('has a URL defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
         });


        /* this loops through each feed in the allFeeds object and ensures
         * it has a name defined and that the name is not empty.
         */
         it('has a name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
         });
    });



    describe('The menu', function() {
        // ensures the menu element is hidden by default.
        it('is hidden by default', function() {
           expect($('body').hasClass("menu-hidden")).toBeTruthy();
        });

        // ensures the menu changes visibility when the menu icon is clicked.
        it('changes visibility when clicked', function() {
            /* grabs default menu status before simulating a click to open the
             * menu, grabbing the open status, and then simulating a click to
             * close the menu again.
             */
            var origStatus = $("body").hasClass("menu-hidden");
            $(".icon-list").click();
            var changeOne = $("body").hasClass("menu-hidden");
            $(".icon-list").click();
            
            expect(origStatus).toBeTruthy();
            expect(changeOne).not.toBeTruthy();
        });
    });
        

    describe('Initial Entries', function() {
        /* ensures when the loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
            loadFeed(0);
            done();
         });

         // simply checks to make sure that the feed has at least one .entry child
         it('exist within the .feed container', function() {
            expect($(".feed .entry")).toBeDefined();
         });
    });
        

    describe('New Feed Selection', function() {
        // ensures that content changes when a new feed is loaded.
        var emptyFeed;

        // pulls in the starting feed, which is empty and puts it in a variable
        beforeEach(function(done) {
            emptyFeed = $('.feed').find('h2').first().text();
            console.log(emptyFeed);

            setTimeout(function() {
                value = 0;
                done();
            }, 5);

            
        });

        /* captures the first entry in the loaded feed and compares it to the
         * original empty feed
         */
        it('changes after loadFeed completes', function(done) {
            loadFeed(0, function() {
                var loadedFeed = $('.feed').find('h2').first().text();
                console.log(loadedFeed);
                expect(loadedFeed).not.toEqual(emptyFeed);
                done();
            });
        });
    });
        
}());
