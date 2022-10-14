<?php
  echo "Hold up wait a minute something ain't right";
  $output = shell_exec('ls -la');
  echo "<pre>$output</pre>";
