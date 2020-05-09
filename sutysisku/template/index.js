      var content = document.getElementById("content");
      var ciska = document.getElementById("ciska");
      var outp = document.getElementById("outp");
      var descr = document.getElementById("descr");
      var drata = document.getElementById("drata");
      var citri = document.getElementById("citri");
      var sidju = document.getElementById("sidju");
      var pb = document.getElementById("kernelo_lo_cpacu");
      var worker = new Worker("worker.js?sisku={now}");
      var SiteTitle = document.querySelector("#title > font");
      var SiteTitleFull = document.querySelector("#site-title");
      SiteTitleFull.classList.add("desktop-mode-title-color");
      // var firstSiteTitleValue = SiteTitle.firstChild.nodeValue;
      var dasri = document.getElementById("galtu-dasri");
      var cnano = document.getElementById("cnano");
      var rimni = document.getElementById("rimni");
      // var arxivo = document.getElementById("arxivo");
      var SiteImage = document.querySelectorAll("#title > img");

      var btnScrollToTop = document.getElementById("scrollToTop");
      content.onscroll = function () {
        if (content.scrollTop > 200) {
          btnScrollToTop.style.display = "block";
          btnScrollToTop.classList.remove("dizlo");
        } else {
          // btnScrollToTop.style.display = "none";
          btnScrollToTop.classList.add("dizlo");
        }
      };

      function switchBorderScroll() {
        if (content.scrollTop > 200) {
          content.scrollTop = 0;
        } else {
          content.scrollTop = content.scrollHeight;
        }
      }

      var fm = {
        BE: "bei",
        BEI: "be'o",
        BY: "boi",
        COI: "do'u",
        DOI: "do'u",
        FIhO: "fe'u",
        FUhE: "fu'o",
        GIhA: "vau",
        GOI: "ge'u",
        JOhI: "te'u",
        KE: "ke'e",
        LAhE: "lu'u",
        LA: "ku",
        LE: "ku",
        LI: "lo'o",
        LOhU: "le'u",
        LU: "li'u",
        ME: "me'u",
        "NAhE+BO": "lu'u",
        NOI: "ku'o",
        NUhI: "nu'u",
        NU: "kei",
        PA: "boi",
        PEhO: "ku'e",
        SEI: "se'u",
        SOI: "se'u",
        TO: "toi",
        TUhE: "tu'u",
        VEI: "ve'o",
        LOhAI: "sa'ai",
        SAhAI: "le'ai",
        LOhOI: "ku'au",
        NAhU: "te'u",
        NIhE: "te'u",
        MOhE: "te'u"
      };
      var resultCount;
      var results = [];

      //search after timeout
      var typingTimer;
      var IdleTypingTimer;
      var delay = (function () {
        return function (callback, ms) {
          clearTimeout(IdleTypingTimer);
          IdleTypingTimer = setTimeout(callback, ms);
        };
      })();

      //prepare:
      var state = {
        searching: {
          seskari: "cnano",
          query: ""
        },
        displaying: {
          seskari: "cnano",
          query: ""
        },
        citri: []
      };

      (function () {
        try {
          var tcini = JSON.parse(localStorage.getItem("tcini"));
          if (tcini.seskari) state.searching.seskari = tcini.seskari;
          if (tcini.query) state.searching.query = tcini.query;
        } catch (e) {}
        try {
          state.citri = JSON.parse(localStorage.getItem("citri")) || [];
        } catch (e) {}
      })();

      RenderCitri();

      function RenderCitri() {
        if (state.citri.length > 0)
          citri.innerHTML =
          " " +
          window.purc +
          state.citri
          .filter(function (a) {
            return a.seskari !== "velcusku";
          })
          .map(function (a) {
            return (
              '<a class="a-' +
              a.seskari +
              '" href="#seskari=' +
              a.seskari +
              "&sisku=" +
              encodeUrl(a.query) +
              '">' +
              escHtml(a.query) +
              "</a>"
            );
          })
          .join(", ");
      }

      function RenderDasri(seskari, sepia) {
        var colors = ["velcusku", "arxivo", "cnano", "rimni"];
        if (!colors.includes(seskari)) seskari = "cnano";
        dasri.className = "kampu-dasri " + seskari + "-dasri noselect";
        SiteTitleFull.classList.add(seskari + "-search-mode-title-color");
        SiteTitleFull.classList.remove("desktop-mode-title-color");
        if (document
          .getElementById(seskari)) document
          .getElementById(seskari)
          .classList.add(seskari + "-tutci-hover", "tutci-hover");
        colors.map(function (c) {
          if (c !== seskari) {
            SiteTitleFull.classList.remove(c + "-search-mode-title-color");
            if (document
              .getElementById(c)) document
              .getElementById(c)
              .classList.remove(c + "-tutci-hover", "tutci-hover");
          }
        });
        for (var i = 0; i < SiteImage.length; i++) {
          SiteImage[i].style.filter = sepia;
        }
      }

      function SwitchRotation({
        action
      }) {
        if (document.readyState !== "complete") return;
        var els = ["logo"];
        if (action === "start") {
          els.map(function (el) {
            document.getElementById(el).classList.remove("stopRotate");
            document.getElementById(el).classList.add("rotate");
          });
          document.getElementById("clear").classList.add("pulsate-css");
          setTimeout(() => {
            if (
              document.getElementById("clear").classList.contains("pulsate-css")
            )
              document.getElementById("ciska").classList.add("granim-css");
          }, 500);
        } else {
          els.map(function (el) {
            document.getElementById(el).classList.add("stopRotate");
          });
          document.getElementById("ciska").classList.remove("granim-css");
          document.getElementById("clear").classList.remove("pulsate-css");
        }
      }

      function EmitVelcusku() {
        if (socket1Chat) socket1Chat.open();
      }

      function RenderResults({
        query,
        seskari
      }) {
        window.jimte = seskari === "velcusku" ? 201 : 30;
        resultCount = 0;
        SwitchRotation({
          action: "stop"
        });
        outp.innerHTML = "";
        skicu_rolodovalsi({
          query,
          seskari
        });
        state.displaying.query = query;
        state.displaying.seskari = seskari;
        outp.style.display = "block";
        descr.style.display = "none";
        drata.style.display = "none";
        sidju.style.display = "flex";
        content.scrollTop = 0;
        switch (state.displaying.seskari) {
          case "rimni":
            MathJax.typeset();
            RenderDasri("rimni", "sepia(1.0)");
            break;
          case "arxivo":
            RenderDasri("arxivo", "none");
            break;
          case "velcusku":
            RenderDasri("velcusku", "none");
            break;
          case "cnano":
          default:
            MathJax.typeset();
            RenderDasri("cnano", "none");
        }

        delay(function () {
          //todo: arrpurc or state.history
          DispatchCitri();

          ga("send", "pageview", "#sisku/" + state.displaying.query);
          var pageViewData = {
            dl: window.location.href,
            dt: document.title,
            dr: document.referrer,
            dp: "#sisku/" + state.displaying.query,
            dh: window.location.protocol + "//" + window.location.hostname,
            z: Math.round(Math.random() * 1e12)
          };
          if (socket) socket.emit("sisku", pageViewData);
        }, 2000);
      }
      //listeners
      worker.onmessage = function (ev) {
        var data = ev.data;
        if (data.kind == "ready") {
          document.title = "la sutysisku";
          var l = document.getElementById("loading");
          l.parentNode.removeChild(l);
          setStateFromUrl({
            replace: true
          });
        } else if (data.kind == "searchResults") {
          if (JSON.stringify(data.req) !== JSON.stringify(state.searching))
            return;
          if (JSON.stringify(data.req) === JSON.stringify(state.displaying))
            return;
          results = data.results || [];
          RenderResults({
            query: data.req.query,
            seskari: data.req.seskari
          });
        } else if (data.kind == "loading") {
          document.getElementById("caho_cpacu").textContent = window.bangubuild;
          pb.style.width = "51%";
        } else if (data.kind == "progress") {
          pb.style.width = data.percent * 100 + "%";
        }
      };
      if (socket) socket.on("la_arxivo_cu_cusku", function (data) {
        if (
          state.searching.seskari === data.seskari &&
          state.searching.query === data.query
        ) {
          results = data.message || [];
          RenderResults({
            query: data.query,
            seskari: data.seskari
          });
        }
      });

      //loaded doc > from url > push new seskari/query, update url
      //get events:
      function parseQuery(queryString) {
        var query = {};
        var pairs = "";
        //legacy support:
        if (queryString.search(/^#sisku\//) === 0) {
          pairs = [queryString.replace(/#sisku\/(.*)/, "sisku=$1")];
        } else {
          pairs = (queryString[0] === "#" ?
            queryString.substr(1) :
            queryString
          ).split("&");
        }
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split("=");
          query[decodeURIComponent(pair[0])] = decodeURIComponent(
            pair[1] || ""
          );
        }
        return query;
      }

      function setStateFromUrl({
        href,
        replace
      }) {
        if (href) {
          href = href.substring(href.indexOf("#") + 1);
          localStorage.setItem("url", "#" + href);
        }
        var params = parseQuery(href || window.location.hash);
        if (!params["sisku"]) return;
        var newSearch = decodeUrl(params["sisku"]).trim();
        if (
          state.searching.seskari !== params["seskari"] ||
          state.searching.query !== newSearch
        ) {
          if (
            params["seskari"] && ["velcusku", "cnano", "rimni", "arxivo"].indexOf(
              params["seskari"]
            ) >= 0
          )
            state.searching.seskari = params["seskari"];
          if (params["sisku"]) {
            state.searching.query = newSearch;
            DispatchState({
              replace
            });
          }
        }
      }
      //clicked link > push it
      citri.addEventListener("click", clicked);

      function clicked(event) {
        if (event.target.nodeName === "A") {
          var el = event.target;
          if (el.ctrlKey || el.metaKey) return;
          setStateFromUrl({
            replace: false,
            href: el.getAttribute("href")
          });
        }
        return;
      }

      function setUrlFromState({
        replace
      }) {
        var url =
          "#seskari=" +
          state.searching.seskari +
          "&sisku=" +
          encodeUrl(state.searching.query);
        if (state.searching.query === "") {
          url = "";
          document.title = "la sutysisku";
        } else {
          document.title = state.searching.query + " - la sutysisku";
        }
        var lastUrl = localStorage.getItem("url") || "";
        if (replace === true) {
          window.history.replaceState({}, null, url);
        } else if (window.location.hash !== url && lastUrl !== url) {
          window.history.pushState({}, null, url);
        }
        localStorage.setItem("url", url);
      }
      //typed, stopped typing > push
      window.addEventListener("popstate", setStateFromUrl);
      ciska.addEventListener("paste", typing(0));
      ciska.addEventListener("keyup", function () {
        typing();
      });
      ciska.addEventListener("keydown", function () {
        clearTimeout(typingTimer);
      });
      ciska.addEventListener("input", typing());
      ciska.addEventListener("textInput", typing());

      function GetCiskaAndDispatch() {
        state.searching.query = plukaquery(ciska.value);
        DispatchState({
          caller: "GetCiskaAndDispatch"
        });
      }

      function typing(a) {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(GetCiskaAndDispatch, a ? a : 250);
      }

      //focus > push
      ciska.addEventListener("focus", focusSearch);

      function focusSearch() {
        state.searching.query = plukaquery(ciska.value);
        DispatchState({});
      }
      //mainbutton > showDesc, state.searching ={}
      document.getElementById("clear").addEventListener("click", EmptyState);
      document.getElementById("title").addEventListener("click", EmptyState);

      function EmptyState() {
        DispatchState({
          empty: true
        });
      }
      //change seskari
      document.getElementById("rimni").addEventListener("click", function () {
        state.searching = {
          seskari: "rimni",
          query: plukaquery(ciska.value)
        };
        DispatchState({
          replace: false
        });
      });

      document.getElementById("cnano").addEventListener("click", function () {
        state.searching = {
          seskari: "cnano",
          query: plukaquery(ciska.value)
        };
        DispatchState({
          replace: false
        });
      });

      // document.getElementById("arxivo").addEventListener("click", function () {
      //   state.searching = {
      //     seskari: "arxivo",
      //     query: plukaquery(ciska.value)
      //   };
      //   DispatchState({
      //     replace: false
      //   });
      // });

      // document.getElementById("velcusku").addEventListener("click", function () {
      //   state.searching = {
      //     seskari: "velcusku",
      //     query: plukaquery(ciska.value)
      //   };
      //   DispatchState({
      //     replace: false
      //   });
      // });

      function DispatchCitri() {
        if (
          state.displaying.query === "" ||
          state.displaying.seskari === "velcusku"
        )
          return;
        var i = 0;
        for (i = 0; i < state.citri.length; i++) {
          if (
            state.citri[i].query === state.displaying.query &&
            state.citri[i].seskari === state.displaying.seskari
          ) {
            state.citri.splice(i, 1);
            break;
          }
        }
        state.citri.unshift(JSON.parse(JSON.stringify(state.displaying)));
        if (state.citri.length > 10) state.citri.length = 10;
        localStorage.setItem("citri", JSON.stringify(state.citri));
        RenderCitri();
      }
      //Dispatch State
      function DispatchState({
        replace,
        caller,
        empty
      }) {
        if (socket1Chat) socket1Chat.close();
        state.searching.query = state.searching.query.trim();
        setUrlFromState({
          replace
        });
        localStorage.setItem("tcini", JSON.stringify(state.searching));
        if (empty == true) {
          state.searching.query = "";
          return RenderDesktop();
        } else if (state.searching.seskari !== "velcusku") {
          if (state.searching.query === "") return RenderDesktop();
          if (
            JSON.stringify(state.searching) === JSON.stringify(state.displaying)
          )
            return;
        }
        //emit search
        ciska.value = state.searching.query;

        SwitchRotation({
          action: "start"
        });
        if (
          caller === "GetCiskaAndDispatch" &&
          state.searching.seskari === "velcusku"
        )
          state.searching.seskari = "cnano";
        switch (state.searching.seskari) {
          case "arxivo":
            var json = JSON.parse(JSON.stringify(state.searching));
            if (
              state.searching.query.charAt(0) !== "^" &&
              state.searching.query.slice(-1)[0] !== "$"
            )
              json.query = "\\b" + state.searching.query + "\\b";
            json.max = 20;
            if (socket) socket.emit("cpedu_fi_la_arxivo", json);
            break;
          case "velcusku":
            EmitVelcusku();
            break;
          default:
            worker.postMessage({
              kind: "newSearch",
              query: state.searching.query,
              seskari: state.searching.seskari
            });
        }
      }
      //rendering
      function RenderDesktop() {
        SwitchRotation({
          action: "stop"
        });
        content.scrollTop = 0;
        var lastQuery = state.displaying.query;
        state.displaying.query = "";
        // ciska.value = "";
        SiteTitleFull.classList.add("desktop-mode-title-color");
        SiteTitleFull.classList.remove(
          "cnano-search-mode-title-color",
          "velcusku-search-mode-title-color",
          "rimni-search-mode-title-color",
          "arxivo-search-mode-title-color"
        );
        cnano.classList.remove("cnano-tutci-hover", "tutci-hover");
        // velcusku.classList.remove("velcusku-tutci-hover", "tutci-hover");
        rimni.classList.remove("rimni-tutci-hover", "tutci-hover");
        // arxivo.classList.remove("arxivo-tutci-hover", "tutci-hover");
        dasri.className = "kampu-dasri cnano-dasri";
        outp.style.display = "none";
        descr.style.display = "block";
        //<xuzganalojudri|lojbo>
        var obj = {
          "@cirkotci": [
            0,
            "lojbo sance",
            "../pixra/taplasance.svg",
            1,
            "../sance/"
          ],
          "@CLL": [
            ".inglic.",
            "Reference Grammar",
            "../pixra/cll.png",
            1,
            "https://lojban.pw/cll/uncll-1.2.7/xhtml_section_chunks/"
          ],
          "@lojban.pw": [
            ".inglic.",
            "Lojban-Chan",
            "../pixra/jbotcan.svg",
            1,
            "https://lojban.pw"
          ],
          muplis: [0, "la muplis", "../pixra/taplamuplis.svg", 2.1],
          jb: [0, "English - Lojban examples", "../pixra/snime-1.svg", 1],
          en: [0, "English-Lojban", "../pixra/selsku_lanci_eng.svg", 1],
          jbo: [0, "fanva fi le'e lojbo ri", "../pixra/lanci_jbo.svg", 1],
          ja: [
            0,
            '日本 - <span style="white-space:pre;">ロジバン</span>',
            "../pixra/selsku_lanci_jpn.svg",
            1
          ],
          "fr-facile": [
            0,
            "français facile - lojban",
            "../pixra/selsku_lanci_fra.svg",
            1
          ],
          ru: [0, "русский - ложбан", "../pixra/selsku_lanci_rus.svg", 1],
          eo: [0, "Esperanto - Loĵbano", "../pixra/lanci_epo.svg", 1],
          es: [0, "español - lojban", "../pixra/selsku_lanci_spa.svg", 1],
          zh: [0, "中文 - 逻辑语", "../pixra/selsku_lanci_zho.svg", 1],
          "@CC": [
            ".inglic.",
            "The Crash Course",
            "../pixra/cogwheel-5.svg",
            1,
            "https://mw.lojban.org/papri/The_Crash_Course_in_Lojban"
          ]
        };
        //</xuzganalojudri|lojbo>
        //<lojbo false>
        var obj = {
          "muplis-eng-pol": [
            0,
            "English - polski",
            "../pixra/muplis-eng-pol.png",
            2.1
          ],
          "en-pt-BR": [0, "English - Portugueze", "../pixra/152.png", 1],
          zamenhofo: [0, "Esperanto - English", "../pixra/lanci_epo.svg", 1],
          toki: [0, "toki pona - English", "../pixra/Toki_pona.svg", 1],
          laadan: [0, "English - Láadan", "../pixra/Double_girl_sign.svg", 1],
          "simplingua-zho": [
            0,
            "Simplingua - 中文",
            "../pixra/simplingua.svg",
            1
          ],
          "ktv-eng": [0, "Kotava - English", "../pixra/ktv-eng.svg", 1],
          ina: [
            0,
            "English - Interlingua",
            "../pixra/Flag_of_Interlingua.svg",
            1
          ],
          ldp: [0, "English - Lingwa de Planeta", "../pixra/ldp.svg", 1],
          ile: [
            0,
            "English - Occidental / Interlingue",
            "../pixra/Flag_of_Interlingue.svg",
            1
          ],
          "epo-thai": [0, "Esperanto - Thai", "../pixra/lanci_epo.svg", 1]
        };
        //</lojbo>
        var acc = "";
        var cisn = 100;
        for (var key in obj) {
          if (obj[key][0] === 0 || obj[key][0] === window.bangu) {
            acc +=
              "<div class='DIV_1' style='height:" +
              cisn +
              "px;width:" +
              obj[key][3] * cisn +
              "px;'><div class='DIV_2' style='height:" +
              cisn +
              "px;width:" +
              obj[key][3] * cisn +
              "px;'><span class='SPAN_3' style='width:auto;'><b class='B_4'>" +
              obj[key][1] +
              "</b></span><a" +
              ((obj[key][4] || "").indexOf("http") === 0 ?
                " rel='noreferrer' target='_blank'" :
                "") +
              ' aria-label="' + obj[key][1].replace(/<[^>]+?>/g,'') + '" href="' +
              (key.indexOf("@") === 0 ?
                obj[key][4] :
                "https://la-lojban.github.io/sutysisku/" +
                key +
                "/#seskari=" +
                state.displaying.seskari +
                "&sisku=" +
                encodeUrl(lastQuery)) +
              "\" class='A_7'><div class='DIV_8' style='height:" +
              cisn +
              "px;width:" +
              obj[key][3] * cisn +
              'px;background-image:url("' +
              obj[key][2] +
              "\")'></div></a></div></div>";
          }
        }
        drata.innerHTML = acc;
        drata.style.display = "block";
      }

      //on incoming messages:
      //if state fully coincides do nothing
      //get results and run skicu_rolodovalsi

      //HTML structure
      window.addEventListener("resize", calcVH, true);
      content.addEventListener("scroll", checkScrolledNearBottom);
      calcVH();

      if (document.attachEvent) {
        document.attachEvent("onkeyup", handler);
      } else {
        document.addEventListener("keyup", handler);
      }

      function handler(e) {
        if (e.keyCode && e.keyCode === 191) ciska.focus();
      }
      if (document.readyState === "loading") {
        pb.style.width = "37%";
        document.title = "la sutysisku";
      }

      function calcVH() {
        content.setAttribute(
          "style",
          "height:" +
          Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
          ) +
          "px;"
        );
      }

      //<xuzganalojudri|lojbo>
      function getCLLSections(te_gerna) {
        return window.arrcll[te_gerna];
      }

      function CLL(selmaho) {
        if (
          state.searching.seskari === "rimni" ||
          !window.cll_url | ((window.arrcll || []).length === 0) ||
          (!selmaho &&
            results[0].s &&
            results[0].s === state.searching.query) ||
          (selmaho && !/^[A-Zh]+/.test(state.searching.query))
        )
          return;
        var secs;
        if (selmaho) {
          secs = getCLLSections(state.searching.query);
        } else {
          secs = getCLLSections(state.searching.query);
          if (!secs && results && results[0] && results[0].s)
            secs =
            getCLLSections(results[0].s) ||
            getCLLSections(
              state.searching.query.toLowerCase().replace(/h/g, "'")
            );
        }
        if (!secs) return;
        var cllHtmlLinksString =
          window.cllnotci +
          "<ul class='definition uoldeliste'>" +
          Object.keys(secs)
          .map(function (sec) {
            return (
              "<li><a rel='noreferrer' target='_blank' href=\"" +
              window.cll_url +
              sec +
              '">' +
              escHtml(secs[sec]) +
              "</a></li>"
            );
          })
          .join("") +
          "</ul>";
        var div = document.createElement("div");
        div.className = (selmaho ? "sidju" : "definition") + " cll noselect";
        div.innerHTML = cllHtmlLinksString;
        return div;
      }
      //</xuzganalojudri|lojbo>

      function checkScrolledNearBottom(ev) {
        if (
          state.displaying.seskari !== "velcusku" &&
          ev.target.scrollTop + window.innerHeight >= outp.clientHeight - 700
        ) {
          window.jimte += 10;
          skicu_rolodovalsi(state.displaying);
          MathJax.typeset();
        }
      }

      function melbi_uenzi({
        def,
        query,
        seskari
      }) {
        if (!["cnano", "rimni"].includes(seskari)) seskari = "cnano";
        return (
            "<span>" +
            def
            .replace(/\$.*?\$/g, function (c) {
              return c
                .replace(/\{/g, "\\curlyleft")
                .replace(/\}/g, "\\curlyright");
            })
            .replace(
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
              function (c) {
                var res =
                  '</span><a href="' +
                  c +
                  '" rel="noreferrer" target="_blank">' +
                  basna({
                    def: c,
                    query
                  }) +
                  "</a><span>";
                if (c.match(/^https?:\/\/.*\.(jpg|png)$/))
                  res += "<img class='se-tcidu-pixra' alt='secusku' src=\"" + c + '"/>\n';
                return res;
              }
            )
            .replace(/\{.*?\}/g, function (c) {
              var c = c.substring(1, c.length - 1);
              return (
                '</span><a href="#seskari=' +
                seskari +
                "&sisku=" +
                encodeUrl(c) +
                '">' +
                basna({
                  def: escHtml(c, true),
                  query
                }) +
                "</a><span>"
              );
            })
            .replace(/\$.*?\$/g, function (c) {
              return c
                .replace(/\\curlyleft/g, "{")
                .replace(/\\curlyright/g, "}");
            }) +
            "</span>"
          )
          .replace(/<span><\/span>/g, "")
          .replace(/<span>[\s\S]*?<\/span>/g, function (c) {
            var c = c.substring(6, c.length - 7);
            return basna({
              def: c,
              query
            });
          });
      }

      function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }

      function basna({
        def,
        query
      }) {
        if (!query || query === "") return def;
        var f =
          "(" +
          escapeRegExp(query).replace(/ /g, "|") +
          "|" +
          escapeRegExp(query)
          .replace(/'/g, "h")
          .replace(/ /g, "|") +
          ")";
        var rock = new RegExp(f, "igm");
        return def.replace(rock, "<span class='basna'>$1</span>");
      }

      function getMatchIndices(query, d) {
        var regex = new RegExp(query, "g");
        var result = [];
        var match;
        while ((match = regex.exec(d))) result.push(match.index);
        return result;
      }

      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      function ConstructArxivoValsiExtract(d, query, range) {
        var locs = getMatchIndices(query, d);
        locs = locs.map(function (i) {
          i = [i - range, i + range];
          if (i[0] < 0) i[0] = 0;
          if (i[0] >= d.length) i[0] = d.length - 1;
          return i;
        });
        for (var i = 0; i < locs.length - 1; i++) {
          if (locs[i][1] > locs[i + 1][0]) {
            locs[i][1] = locs[i + 1][1];
            locs[i + 1][0] = locs[i][0];
          }
        }
        locs = locs.map(function (i) {
          return JSON.stringify(i);
        });
        if (locs.length > 0) {
          locs = locs.filter(onlyUnique).map(function (i) {
            i = JSON.parse(i);
            var n = d.substr(i[0], i[1] - i[0]);
            n = basna({
              def: n,
              query
            });
            if (i[0] > 3) n = "..." + n;
            if (i[1] < d.length - 4) n = n + "...";
            return n;
          });
          locs = locs.join("<br/>");
        } else {
          var n = d.substr(0, Math.min(100, d.length));
          if (n.length < d.length) n = n + "...";
          n = basna({
            def: n,
            query
          });
          locs = n;
        }
        return locs;
      }

      function skicu_palodovalsi({
        def,
        inner,
        query,
        seskari,
        length,
        index
      }) {
        if (!query) query = state.displaying.query;
        if (!seskari) seskari = state.displaying.seskari;
        if (!def) def = [];
        var out = document.createElement("div");
        out.className = inner ? "terminner" : "termouter";
        out.classList.add("term");
        if (
          !inner &&
          def.d &&
          def.d.nasezvafahi &&
          (def.rafsiDocuments || []).length === 0
        ) {
          out.className = "sidju cll noselect";
        }
        if (typeof fm[def.s] !== "undefined") {
          var fmm = document.createElement("h4");
          fmm.className = "tfm";
          fmm.innerHTML =
            '&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href="#seskari=' +
            seskari +
            "&sisku=" +
            encodeUrl(fm[def.s]) +
            '">' +
            escHtml(fm[def.s]) +
            "</a>]</sup></i>";
        }
        var sh = [];
        for (var key in fm) {
          if (fm[key] === def.w)
            sh.push(
              '<a href="#seskari=' +
              seskari +
              "&sisku=" +
              encodeUrl(key) +
              '">' +
              escHtml(key) +
              "</a>"
            );
        }
        if (sh.length !== 0) {
          var tfm = document.createElement("div");
          tfm.classList.add("valsi");
          if (def.l) tfm.classList.add("nalojbo");
          tfm.innerHTML =
            "<i><sup>[" +
            sh.join(", ") +
            "&nbsp;&nbsp;&nbsp;...&nbsp;]</sup></i>&nbsp;&nbsp;";
        }
        if (def.s) {
          var ss = document.createElement("a");
          ss.className = "tutci klesi klesi-tutci";
          var text = basna({
            def: escHtml(def.s),
            query
          });
          ss.innerHTML = text;
          if (seskari !== "velcusku")
            ss.href = "#seskari=" + seskari + "&sisku=" + encodeUrl(def.s);
        }
        if (def.t) {
          var jvs = document.createElement("a");
          jvs.className = "klesi link";
          var text = def.t;
          var txt = encodeUrl(def.w).replace(/_/g, "%20");
          jvs.href = window.judri ?
            window.judri + txt :
            "#seskari=cnano&sisku=" + txt;
          if (window.judri) {
            jvs.setAttribute("target", "_blank");
            jvs.setAttribute("rel", "noreferrer");
          }
          /*<muplis>*/
          var deft = "";
          if (def.t.search("sampu staile") >= 0)
            deft +=
            "<img src='../pixra/plise.png' height='16' width='16' alt='lo staile poi sampu'>";
          if (def.t.search("mansa staile") >= 0)
            deft +=
            "<img src='../pixra/pelxuplise.png' height='16' width='16' alt=\"lo staile poi na mutce cinri\">";
          if (def.t.search("plixau jufra") >= 0)
            deft +=
            "<img src='../pixra/crinoplise.png' height='16' width='16' alt=\"lo jufra poi ka'e xamgu lo di'i fanva\">";
          if (def.t.search("cnano staile") >= 0)
            deft +=
            "<img src='../pixra/blabiplise.png' height='16' width='16' alt=\"lo staile poi ka'e pluja\">";
          if (def.t.search("non-standard") >= 0)
            deft +=
            "<img src='../pixra/cicnaplise.png' height='16' width='16' alt=\"na'e catni se ciska staile\">";
          if (deft !== "") text = deft;
          /*</muplis>*/
          if (window.xuzganalojudri && !def.l) {
            text = escHtml(def.t) + "# ";
            if (def.d && def.d.nasezvafahi) text = "➕ " + text;
          }
          jvs.innerHTML = text;
        }
        if (def.date) {
          var jvs = document.createElement("div");
          jvs.className = "tutci klesi klesi-tutci";
          jvs.style.whiteSpace = "nowrap";
          jvs.innerHTML = def.date;
        }
        if (def.from) {
          var ss = document.createElement("div");
          ss.className = "tutci klesi klesi-tutci";
          ss.innerHTML = def.from;
        }
        var word = document.createElement("h4");
        word.classList.add("valsi");
        if (def.l) word.classList.add("nalojbo");
        if (plukaquery(def.w) == query || seskari == "velcusku") {
          word.innerHTML =
            basna({
              def: def.w,
              query
            }) + " ";
        } else {
          word.innerHTML =
            '<a class="valsi' +
            (def.l ? "" : " nalojbo") +
            '" href="#seskari=' +
            seskari +
            "&sisku=" +
            encodeUrl(def.w) +
            '">' +
            basna({
              def: escHtml(def.w, true),
              query
            }) +
            "</a>" +
            " ";
        }
        var heading = document.createElement("heading");
        heading.classList.add("heading");
        var flex = document.createElement("heading");
        flex.style.flex = 1;

        if (tfm) heading.appendChild(tfm);
        heading.appendChild(word);
        if (fmm) heading.appendChild(fmm);
        heading.appendChild(flex);
        if (jvs) heading.appendChild(jvs);
        if (ss) heading.appendChild(ss);

        out.appendChild(heading);

        if (seskari !== "arxivo" && def.d) {
          var n = document.createElement("div");
          n.classList.add("definition", "valsi");
          if (def.d && def.d.nasezvafahi) {
            n.classList.add("nasezvafahi", "noselect");
            n.innerHTML = window.nasezvafahi;
          } else {
            var melbi = melbi_uenzi({
              def: def.d,
              query,
              seskari
            });
            if (seskari !== "velcusku")
              melbi = melbi.replace(/\n/g, "<br/>") + " ";
            n.innerHTML = melbi;
          }
          out.appendChild(n);
        }
        if (seskari === "arxivo") {
          var k = document.createElement("div");
          k.classList.add("definition", "valsi", "pointer");
          k.innerHTML = ConstructArxivoValsiExtract(def.d, query, 50);
          k.addEventListener("click", function () {
            k.style.display = "none";
            k.nextElementSibling.style.display = "block";
          });
          out.appendChild(k);

          var n = document.createElement("div");
          n.classList.add("definition", "valsi");
          n.style.display = "none";
          if (def.d && def.d.nasezvafahi) {
            n.classList.add("nasezvafahi", "noselect");
            n.innerHTML = window.nasezvafahi;
          } else {
            n.innerHTML =
              basna({
                def: def.d,
                query
              }).replace(/\n/g, "<br/>") + " ";
            n.addEventListener("click", function () {
              n.style.display = "none";
              n.previousElementSibling.style.display = "block";
              n.parentElement.scrollIntoView();
            });
          }
          out.appendChild(n);
          //add two divs. first is hidden. on click hide and display the other
        }
        if (def.n) {
          var n = document.createElement("div");
          n.classList.add("notes", "valsi");
          n.innerHTML =
            melbi_uenzi({
              def: def.n,
              query,
              seskari
            }) + " ";
          out.appendChild(n);
        }
        //<xuzganalojudri|lojbo>
        if (index == 0 && seskari !== "velcusku") {
          var cll = CLL();
          if (cll) out.appendChild(cll);
        }
        //</xuzganalojudri|lojbo>
        if (def.e) {
          var n = document.createElement("div");
          n.classList.add("examples", "valsi");
          n.innerHTML =
            "<table class='ciksi'>" +
            melbi_uenzi({
              def: (def.e + "\n")
                .replace(/%/g, "\n")
                .replace(
                  /(.*?) — (.*?)\n/g,
                  "<tr><td class='mupligreku'><b>$1<\/b><\/td><td class='mupligreku'><i>$2<\/i><\/td><\/tr>\n"
                ),
              query,
              seskari
            }) +
            "</table> ";
          out.appendChild(n);
        }
        if (def.k) {
          var n = document.createElement("div");
          n.className = "related";
          n.innerHTML =
            "See also: " +
            melbi_uenzi({
              def: def.k,
              query,
              seskari
            }) +
            " ";
          out.appendChild(n);
        }
        if ((def.r || []).length > 0 && !def.l && window.xuzganalojudri) {
          var rafsi = document.createElement("div");
          rafsi.className = "rafsi noselect";
          rafsi.innerHTML = "rafsi: ";
          for (i = 0; i < def.r.length; i++) {
            var rafElem = document.createElement("span");
            rafElem.className = "pamei";
            var raf = def.r[i];
            if ((def.t || "").match(/lujvo/)) {
              var a = document.createElement("a");
              a.setAttribute(
                "href",
                "#seskari=" + seskari + "&sisku=" + encodeUrl(raf)
              );
              a.text = raf;
              rafElem.appendChild(a);
            } else {
              rafElem.innerHTML = basna({
                def: raf,
                query
              });
            }
            rafElem.innerHTML = rafElem.innerHTML + " ";
            rafsi.appendChild(rafElem);
          }
          out.appendChild(rafsi);
        }
        if ((def.rafsiDocuments || []).length > 0) {
          var subDefs = document.createElement("div");
          subDefs.classList.add("definition", "subdefinitions");
          for (var i = 0; i < def.rafsiDocuments.length; i++) {
            subDefs.appendChild(
              skicu_palodovalsi({
                def: def.rafsiDocuments[i],
                inner: true
              })
            );
          }
          out.appendChild(subDefs);
        }

        out.addEventListener("click", clicked);
        return out;
      }

      function plukaquery(a) {
        if (a.charAt(0) !== "^" && a.slice(-1) !== "$")
          return a
            .replace(/[,\.]/g, " ")
            .replace(/ {2,}/g, " ")
            .replace(/’/g, "'")
            .trim();
        return a;
      }

      function encodeUrl(uenzi) {
        //for bookmarkable urls
        return encodeURIComponent((uenzi || "").replace(/ /g, "_")).replace(
          /'/g,
          "%27"
        );
      }

      function decodeUrl(urli) {
        return decodeURIComponent(
          urli.replace(/&amp;/g, "&").replace(/%27/g, "'")
        ).replace(/[_\+]/g, " ");
      }

      function escHtml(a, apos) {
        //for displaying text
        a = (a || "")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/\(/g, "&#40;")
          .replace(/\)/g, "&#41;");
        if (!apos) a = a.replace(/'/g, "&#039;");
        return a;
      }

      function skicu_rolodovalsi({
        query,
        seskari
      }) {
        var displayUpTo = Math.min(window.jimte, results.length);
        var cll = CLL(true);
        if (cll) outp.appendChild(cll);
        for (; resultCount < displayUpTo; resultCount++) {
          outp.appendChild(
            skicu_palodovalsi({
              def: results[resultCount],
              query,
              seskari,
              length: results.length,
              index: resultCount
            })
          );
        }
      }

      // jimpe fi le jei su'o cnino sorcu ka'e se pilno ca lo nu jai gau akti fai le cnino papri

      if ("serviceWorker" in navigator) {
        window.addEventListener("load", function () {
          navigator.serviceWorker.register("./sw.js").then(
            function (reg) {
              console.log(
                "ServiceWorker registration successful with scope: ",
                reg.scope
              );
            },
            function (err) {
              console.log("ServiceWorker registration failed: ", err);
            }
          );
        });
      }
      var socket;
      // socket = io ? io.connect("https://jbotcan.org:3020"):undefined;
      // if (socket) socket.on("connect", function () {
      //   document.getElementById("arxivo").style.display = "inline-block";
      // });
      // if (socket) socket.on("connect_error", function () {
      //   document.getElementById("arxivo").style.display = "none";
      // });
      // if (socket) socket.on("disconnect", function () {
      //   document.getElementById("arxivo").style.display = "none";
      // });
      var socket1Chat;
      // socket1Chat = if (io) io.connect("https://1chat-bridge.lojban.pw");
      // if (socket1Chat) {
      //   socket1Chat.on("connect", function () {
      //     document.getElementById("velcusku").style.display = "inline-block";
      //   });
      //   socket1Chat.on("connect_error", function () {
      //     document.getElementById("velcusku").style.display = "none";
      //   });
      //   // socket1Chat.on("disconnect", function() {
      //   //   document.getElementById("velcusku").style.display = "none";
      //   // });
      //   socket1Chat.on("sentFrom", function (data) {
      //     var i = data.data;
      //     var msg = {
      //       d: i.chunk.replace(/[\n\r]+$/g, ""),
      //       s: i.channelId,
      //       w: i.author
      //     };
      //     // if (msg.s === channel)
      //     outp.appendChild(
      //       skicu_palodovalsi({
      //         def: msg,
      //         query: state.searching.query,
      //         seskari: "velcusku"
      //       })
      //     );
      //     outp.childNodes.length = Math.min(outp.childNodes.length, 201);
      //     // content.scrollTop = content.scrollHeight;
      //   });
      //   socket1Chat.on("history", function (data) {
      //     // console.log(data);
      //     document.getElementById("velcusku").style.display = "inline-block";
      //     results = data.map(function (i) {
      //       return {
      //         d: i.chunk.replace(/[\n\r]+$/g, ""),
      //         s: i.channelId,
      //         w: i.author
      //       };
      //     });
      //     // .filter(function(i) {
      //     //   return i.s === channel;
      //     // });
      //     RenderResults({
      //       query: state.searching.query,
      //       seskari: "velcusku"
      //     });
      //     content.scrollTop = content.scrollHeight;
      //   });
      // }
      ciska.focus();