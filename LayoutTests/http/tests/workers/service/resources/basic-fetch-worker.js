self.addEventListener("fetch", (event) => {
    if (event.request.url.indexOf("test1") !== -1) {
        event.respondWith(new Response(null, { status: 200, statusText: "Hello from service worker" }));
        return;
    }
    if (event.request.url.indexOf("test2") !== -1) {
        event.respondWith(new Response(null, { status: 500, statusText: "Error from service worker" }));
        return;
    }
    if (event.request.url.indexOf("test3") !== -1) {
        event.respondWith(Response.error());
        return;
    }
    event.respondWith(Response.error());
});
