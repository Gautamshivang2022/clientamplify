import React from 'react'
import '../../css/style.css';
import '../../css/globalstyle.css';
import '../../css/perfect-scrollbar.css';
export default function Vsidebar() {
  return (
    <div>
       {/* <!--**********************************
            Sidebar start
        ***********************************--> */}
				<div class="deznav">
					<div class="deznav-scroll">
					
					</div>
					<a class="logout-btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
							stroke-linejoin="round" class="feather feather-log-out">
							<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
							<polyline points="16 17 21 12 16 7"></polyline>
							<line x1="21" y1="12" x2="9" y2="12"></line>
						</svg>
					</a>
				</div>
				{/* <!--**********************************
            Sidebar end
        ***********************************-->
                <!--********************************** */}
    </div>
  )
}
