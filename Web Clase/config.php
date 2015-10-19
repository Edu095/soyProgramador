<?php
function menu() {
	echo "<h1 id='logo'><a href='index.php'>Landed</a></h1>
					<nav id='nav'>
						<ul>
							<li><a href='index.php'>Home</a></li>
							<li>
								<a href='#'>Layouts</a>
								<ul>
									<li><a href='left-sidebar.php'>Left Sidebar</a></li>
									<li><a href='right-sidebar.php'>Right Sidebar</a></li>
									<li><a href='no-sidebar.php'>No Sidebar</a></li>
									<li>
										<a href='#'>Submenu</a>
										<ul>
											<li><a href='#'>Option 1</a></li>
											<li><a href='#'>Option 2</a></li>
											<li><a href='#'>Option 3</a></li>
											<li><a href='#'>Option 4</a></li>
										</ul>
									</li>
								</ul>
							</li>
							
							<li><a href='elements.php'>Elements</a></li>
							<li><a href='http://www.printfdamw.com/foro' class='button special'>Foro</a></li>
						</ul>
					</nav>";
}