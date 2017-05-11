(ns server.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [server.core-test]))

(doo-tests 'server.core-test)

