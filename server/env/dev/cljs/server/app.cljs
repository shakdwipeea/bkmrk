(ns ^:figwheel-no-load server.app
  (:require [server.core :as core]
            [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
