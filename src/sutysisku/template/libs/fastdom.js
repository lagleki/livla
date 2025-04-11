class FastDom {
    constructor() {
        this.writes = [];
        this.scheduled = false;
        this.requestAnimationFrame = window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || (cb => { return setTimeout(cb, 16); })
    }

    mutate(fn) {
        this.writes.push(fn);
        this.#scheduleFlush();
        return fn;
    }

    #catch(e) { return console.error(e) }

    #scheduleFlush() {
        if (this.scheduled) return
        this.scheduled = true;
        this.requestAnimationFrame(this.#flush);
    }

    #flush() {
        let error;

        try {
            let task; while (task = this.writes.shift()) task();
        } catch (e) { error = e; }

        this.scheduled = false;

        if (this.writes.length) this.#scheduleFlush();

        if (error) this.#catch(error);
    }
}

// FastDom singleton
export default window.fastdom = (window.fastdom || new FastDom());
