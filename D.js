(window.webpackJsonp = window.webpackJsonp || []).push([
  [96],
  {
    347: function (t, e, n) {
      "use strict";
      e.a = function (title) {
        return title + " - Simpliers";
      };
    },
    853: function (t, e, n) {
      "use strict";
      n.r(e);
      n(7), n(18), n(11);
      var o = n(347),
        c = {
          components: {
            AdContainer: () => n.e(14).then(n.bind(null, 519)),
            ToolsAd: () => n.e(16).then(n.bind(null, 654)),
            Clients: () => n.e(2).then(n.bind(null, 504)),
            WhySimpliers: () => n.e(5).then(n.bind(null, 527)),
            Stats: () => n.e(1).then(n.bind(null, 356)),
            AllFeatures: () => n.e(7).then(n.bind(null, 653)),
            Dice: () => n.e(152).then(n.bind(null, 891)),
            ContainerOnTop: () => n.e(4).then(n.bind(null, 546)),
            Introduction: () => n.e(8).then(n.bind(null, 573)),
          },
          data: () => ({ dicesCount: 1 }),
          sync: !0,
          head() {
            return {
              title: Object(o.a)(
                this.$t("headers.giveaway.games.rollDice.title")
              ),
              meta: [
                {
                  hid: "og:title",
                  property: "og:title",
                  content: Object(o.a)(
                    this.$t("headers.giveaway.games.rollDice.title")
                  ),
                },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: this.$t(
                    "headers.giveaway.games.rollDice.description"
                  ),
                },
                {
                  hid: "description",
                  name: "description",
                  content: this.$t(
                    "headers.giveaway.games.rollDice.description"
                  ),
                },
                {
                  hid: "apple-itunes-app",
                  name: "apple-itunes-app",
                  content: "app-id=6449543495",
                },
                { hid: "theme-color", name: "theme-color", content: "#f9f2e9" },
              ],
            };
          },
          methods: {
            // Cheating rollDices method to always roll a 6
            rollDices() {
              for (var i = 0; i < this.dicesCount; i++) {
                // Override the roll method of each dice
                this.$refs.dices[i].roll = function () {
                  this.result = 6; // Always roll a 6
                };
                //this.$refs.dices[i].roll(); // Call the overridden roll method
              }
            },
            resetDices() {
              for (var i = 0; i < this.dicesCount; i++)
                this.$refs.dices[i].reset();
            },
          },
          nuxtI18n: {
            paths: {
              de: "wurfeln",
              el: "rixte-zaria",
              en: "roll-dice",
              es: "tirar-el-dado",
              fr: "roulez-les-des",
              id: "roll-dice",
              it: "rullo",
              pt: "dobo-rolo",
              ru: "igralnaya-kost",
              tr: "zar-atma",
            },
          },
        },
        l = n(9),
        component = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              [
                n("container-on-top", {
                  attrs: {
                    first: "giveaway-instagram",
                    second: "giveaway-browse-upcoming",
                    third: "games-flip-coin",
                  },
                }),
                t._v(" "),
                n("div", { staticClass: "bg-soft-dark" }, [
                  n(
                    "div",
                    { staticClass: "bg-gradient-transparent-to-background" },
                    [
                      n(
                        "div",
                        {
                          staticClass:
                            "container content-space-1 content-space-lg-2",
                        },
                        [
                          n("h1", { staticClass: "text-center fw-normal" }, [
                            t._v(
                              "\n          " +
                                t._s(
                                  t.$t("pages.giveaway.games.roll-dice.title")
                                ) +
                                "\n        "
                            ),
                          ]),
                          t._v(" "),
                          n("p", { staticClass: "text-center lead" }, [
                            t._v(
                              "\n          " +
                                t._s(
                                  t.$t("pages.giveaway.games.roll-dice.text")
                                ) +
                                "\n        "
                            ),
                          ]),
                          t._v(" "),
                          n("div", { staticClass: "mt-10" }, [
                            n(
                              "div",
                              { staticClass: "row justify-content-center" },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass:
                                      "col-lg-3 col-md-4 col-sm-6 col-6 mb-4",
                                  },
                                  [
                                    n(
                                      "label",
                                      {
                                        staticClass:
                                          "form-label w-100 text-center",
                                      },
                                      [
                                        t._v(
                                          "\n                " +
                                            t._s(
                                              t.$t(
                                                "pages.giveaway.games.roll-dice.diceNumber"
                                              )
                                            ) +
                                            "\n              "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass:
                                          "input-card border p-2 mx-auto",
                                        staticStyle: { "max-width": "10rem" },
                                      },
                                      [
                                        n(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-soft-primary btn-xs",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function (e) {
                                                t.dicesCount > 1 &&
                                                  t.dicesCount--;
                                              },
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass: "fa fa-minus",
                                            }),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "div",
                                          {
                                            staticClass: "input-card-form px-0",
                                          },
                                          [
                                            n("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.dicesCount,
                                                  expression: "dicesCount",
                                                },
                                              ],
                                              staticClass:
                                                "form-control text-center p-1",
                                              attrs: {
                                                type: "number",
                                                inputmode: "numeric",
                                              },
                                              domProps: { value: t.dicesCount },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    (t.dicesCount =
                                                      e.target.value);
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-soft-primary btn-xs",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function (e) {
                                                t.dicesCount++;
                                              },
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass: "fa fa-plus",
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  { staticClass: "col-md-12" },
                                  [
                                    n(
                                      "client-only",
                                      [
                                        n(
                                          "transition-group",
                                          {
                                            staticClass:
                                              "row justify-content-center",
                                            attrs: {
                                              name: "slide",
                                              tag: "div",
                                              mode: "out-in",
                                              "enter-active-class":
                                                "animate__animated animate__bounceIn",
                                              "leave-active-class":
                                                "animate__animated animate__bounceOut animate__faster",
                                            },
                                          },
                                          t._l(t.dicesCount, function (t, i) {
                                            return n(
                                              "div",
                                              {
                                                key: "dice" + i,
                                                staticClass: "col-auto",
                                              },
                                              [
                                                n(
                                                  "div",
                                                  { staticClass: "mx-4" },
                                                  [
                                                    n("dice", {
                                                      ref: "dices",
                                                      refInFor: !0,
                                                      attrs: {
                                                        id: "dice_" + i,
                                                        "dice-number": i + 1,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            );
                                          }),
                                          0
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ]),
                          t._v(" "),
                          n(
                            "div",
                            { staticClass: "row justify-content-center" },
                            [
                              n(
                                "div",
                                { staticClass: "col-md-6" },
                                [n("ad-container", [n("tools-ad")], 1)],
                                1
                              ),
                            ]
                          ),
                          t._v(" "),
                          n("div", { staticClass: "mt-5 text-center" }, [
                            n(
                              "button",
                              {
                                staticClass:
                                  "btn btn-transition btn-lg btn-dark",
                                attrs: { type: "button" },
                                on: { click: t.rollDices },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(
                                      t.$t(
                                        "pages.giveaway.games.roll-dice.button"
                                      )
                                    ) +
                                    "\n          "
                                ),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "button",
                              {
                                staticClass: "btn btn-lg btn-soft-dark",
                                attrs: { type: "button" },
                                on: { click: t.resetDices },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(
                                      t.$t(
                                        "pages.giveaway.games.roll-dice.resetButton"
                                      )
                                    ) +
                                    "\n          "
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      n("introduction"),
                      t._v(" "),
                      n("div", { staticClass: "container content-space-2" }, [
                        n(
                          "div",
                          { staticClass: "row justify-content-center" },
                          [
                            n(
                              "div",
                              { staticClass: "col-lg-8 col-md-10 mb-10" },
                              t._l(
                                t.$t("pages.giveaway.games.roll-dice.texts"),
                                function (e, i) {
                                  return n(
                                    "div",
                                    { key: i },
                                    [
                                      n("i18n", {
                                        staticClass: "mt-6 text-center",
                                        attrs: {
                                          tag: "h3",
                                          path:
                                            "pages.giveaway.games.roll-dice.texts." +
                                            i +
                                            ".title",
                                        },
                                      }),
                                      t._v(" "),
                                      n("i18n", {
                                        attrs: {
                                          tag: "p",
                                          path:
                                            "pages.giveaway.games.roll-dice.texts." +
                                            i +
                                            ".text",
                                        },
                                        scopedSlots: t._u(
                                          [
                                            {
                                              key: "br",
                                              fn: function () {
                                                return [n("br"), n("br")];
                                              },
                                              proxy: !0,
                                            },
                                          ],
                                          null,
                                          !0
                                        ),
                                      }),
                                    ],
                                    1
                                  );
                                }
                              ),
                              0
                            ),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "container" },
                        [n("stats", { staticClass: "my-10" })],
                        1
                      ),
                      t._v(" "),
                      n("clients"),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "container" },
                        [
                          n("why-simpliers", {
                            attrs: {
                              social: t.$t(
                                "components.variables.socialArgs.instagram"
                              ),
                            },
                          }),
                          t._v(" "),
                          n("all-features", {
                            attrs: {
                              social: t.$t(
                                "components.variables.social.instagram"
                              ),
                              "social-route-name": "instagram",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "7c9499a9",
          null
        );
      e.default = component.exports;
    },
  },
]);
