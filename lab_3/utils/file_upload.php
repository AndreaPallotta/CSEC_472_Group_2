<?php
  echo "If you see this means, this file has been executed";
  $output = shell_exec('ls -la');
  echo "<pre>$output</pre>";