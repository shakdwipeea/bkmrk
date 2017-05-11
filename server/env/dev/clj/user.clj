(ns user
  (:require [mount.core :as mount]
            [server.figwheel :refer [start-fw stop-fw cljs]]
            server.core))

(defn start []
  (mount/start-without #'server.core/repl-server))

(defn stop []
  (mount/stop-except #'server.core/repl-server))

(defn restart []
  (stop)
  (start))


