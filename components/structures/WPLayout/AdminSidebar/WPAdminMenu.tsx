export default function WPAdminMenu() {
  return (
    <div id="adminmenumain" role="navigation" aria-label="Main menu">
      <a href="#wpbody-content" className="screen-reader-shortcut">
        Skip to main content
      </a>
      <a href="#wp-toolbar" className="screen-reader-shortcut">
        Skip to toolbar
      </a>
      <div id="adminmenuback"></div>
      <div id="adminmenuwrap">
        <ul id="adminmenu">
          <li
            className="wp-first-item wp-has-submenu wp-has-current-submenu wp-menu-open menu-top menu-top-first menu-icon-dashboard"
            id="menu-dashboard"
          >
            <a
              href="index.php"
              className="wp-first-item wp-has-submenu wp-has-current-submenu wp-menu-open menu-top menu-top-first menu-icon-dashboard"
              aria-haspopup="false"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before dashicons-dashboard"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">Dashboard</div>
            </a>
            <ul className="wp-submenu wp-submenu-wrap">
              <li className="wp-submenu-head" aria-hidden="true">
                Dashboard
              </li>
              <li className="wp-first-item current">
                <a
                  href="index.php"
                  className="wp-first-item current"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="update-core.php">
                  Updates{" "}
                  <span className="update-plugins count-6">
                    <span className="update-count">6</span>
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li
            className="wp-has-submenu wp-not-current-submenu menu-top toplevel_page_jetpack menu-top-last"
            id="toplevel_page_jetpack"
          >
            <a
              href="admin.php?page=jetpack#/dashboard"
              className="wp-has-submenu wp-not-current-submenu menu-top toplevel_page_jetpack menu-top-last"
              aria-haspopup="true"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">Jetpack</div>
            </a>
            <ul className="wp-submenu wp-submenu-wrap">
              <li className="wp-submenu-head" aria-hidden="true">
                Jetpack
              </li>
              <li className="wp-first-item">
                <a
                  href="admin.php?page=jetpack#/dashboard"
                  className="wp-first-item"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a href="admin.php?page=jetpack#/settings">Settings</a>
              </li>
              <li>
                <a href="admin.php?page=stats">Site Stats</a>
              </li>
            </ul>
          </li>
          <li
            className="wp-not-current-submenu wp-menu-separator"
            aria-hidden="true"
          >
            <div className="separator"></div>
          </li>
          <li
            className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-post open-if-no-js menu-top-first"
            id="menu-posts"
          >
            <a
              href="edit.php"
              className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-post open-if-no-js menu-top-first"
              aria-haspopup="true"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before dashicons-admin-post"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">Posts</div>
            </a>
            <ul className="wp-submenu wp-submenu-wrap">
              <li className="wp-submenu-head" aria-hidden="true">
                Posts
              </li>
              <li className="wp-first-item">
                <a href="edit.php" className="wp-first-item">
                  All Posts
                </a>
              </li>
              <li>
                <a href="post-new.php">Add New</a>
              </li>
              <li>
                <a href="edit-tags.php?taxonomy=category">Categories</a>
              </li>
              <li>
                <a href="edit-tags.php?taxonomy=post_tag">Tags</a>
              </li>
            </ul>
          </li>
          <li
            className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-media"
            id="menu-media"
          >
            <a
              href="upload.php"
              className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-media"
              aria-haspopup="true"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before dashicons-admin-media"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">Media</div>
            </a>
            <ul className="wp-submenu wp-submenu-wrap">
              <li className="wp-submenu-head" aria-hidden="true">
                Media
              </li>
              <li className="wp-first-item">
                <a href="upload.php" className="wp-first-item">
                  Library
                </a>
              </li>
              <li>
                <a href="media-new.php">Add New</a>
              </li>
            </ul>
          </li>
          <li
            className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-page"
            id="menu-pages"
          >
            <a
              href="edit.php?post_type=page"
              className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-page"
              aria-haspopup="true"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before dashicons-admin-page"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">Pages</div>
            </a>
            <ul className="wp-submenu wp-submenu-wrap">
              <li className="wp-submenu-head" aria-hidden="true">
                Pages
              </li>
              <li className="wp-first-item">
                <a href="edit.php?post_type=page" className="wp-first-item">
                  All Pages
                </a>
              </li>
              <li>
                <a href="post-new.php?post_type=page">Add New</a>
              </li>
            </ul>
          </li>
          <li
            className="wp-not-current-submenu menu-top menu-icon-comments"
            id="menu-comments"
          >
            <a
              href="edit-comments.php"
              className="wp-not-current-submenu menu-top menu-icon-comments"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before dashicons-admin-comments"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">
                Comments{" "}
                <span className="awaiting-mod count-0">
                  <span className="pending-count" aria-hidden="true">
                    0
                  </span>
                  <span className="comments-in-moderation-text screen-reader-text">
                    0 Comments in moderation
                  </span>
                </span>
              </div>
            </a>
          </li>
          <li
            className="wp-has-submenu wp-not-current-submenu menu-top toplevel_page_feedback menu-top-last"
            id="toplevel_page_feedback"
          >
            <a
              href="edit.php?post_type=feedback"
              className="wp-has-submenu wp-not-current-submenu menu-top toplevel_page_feedback menu-top-last"
              aria-haspopup="true"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before dashicons-feedback"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">Feedback</div>
            </a>
            <ul className="wp-submenu wp-submenu-wrap">
              <li className="wp-submenu-head" aria-hidden="true">
                Feedback
              </li>
              <li className="wp-first-item">
                <a href="edit.php?post_type=feedback" className="wp-first-item">
                  Form Responses
                </a>
              </li>
            </ul>
          </li>
          <li
            className="wp-not-current-submenu wp-menu-separator"
            aria-hidden="true"
          >
            <div className="separator"></div>
          </li>
          <li
            className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-appearance menu-top-first"
            id="menu-appearance"
          >
            <a
              href="themes.php"
              className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-appearance menu-top-first"
              aria-haspopup="true"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before dashicons-admin-appearance"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">Appearance</div>
            </a>
            <ul className="wp-submenu wp-submenu-wrap">
              <li className="wp-submenu-head" aria-hidden="true">
                Appearance
              </li>
              <li className="wp-first-item">
                <a href="themes.php" className="wp-first-item">
                  Themes{" "}
                  <span className="update-plugins count-2">
                    <span className="theme-count">2</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="site-editor.php">
                  Editor <span className="awaiting-mod">beta</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins"
            id="menu-plugins"
          >
            <a
              href="plugins.php"
              className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins"
              aria-haspopup="true"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before dashicons-admin-plugins"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">
                Plugins{" "}
                <span className="update-plugins count-3">
                  <span className="plugin-count">3</span>
                </span>
              </div>
            </a>
            <ul className="wp-submenu wp-submenu-wrap">
              <li className="wp-submenu-head" aria-hidden="true">
                Plugins{" "}
                <span className="update-plugins count-3">
                  <span className="plugin-count">3</span>
                </span>
              </li>
              <li className="wp-first-item">
                <a href="plugins.php" className="wp-first-item">
                  Installed Plugins
                </a>
              </li>
              <li>
                <a href="plugin-install.php">Add New</a>
              </li>
            </ul>
          </li>
          <li
            className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-users"
            id="menu-users"
          >
            <a
              href="users.php"
              className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-users"
              aria-haspopup="true"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before dashicons-admin-users"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">Users</div>
            </a>
            <ul className="wp-submenu wp-submenu-wrap">
              <li className="wp-submenu-head" aria-hidden="true">
                Users
              </li>
              <li className="wp-first-item">
                <a href="users.php" className="wp-first-item">
                  All Users
                </a>
              </li>
              <li>
                <a href="user-new.php">Add New</a>
              </li>
              <li>
                <a href="profile.php">Profile</a>
              </li>
            </ul>
          </li>
          <li
            className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-tools"
            id="menu-tools"
          >
            <a
              href="tools.php"
              className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-tools"
              aria-haspopup="true"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before dashicons-admin-tools"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">Tools</div>
            </a>
            <ul className="wp-submenu wp-submenu-wrap">
              <li className="wp-submenu-head" aria-hidden="true">
                Tools
              </li>
              <li className="wp-first-item">
                <a href="tools.php" className="wp-first-item">
                  Available Tools
                </a>
              </li>
              <li>
                <a href="import.php">Import</a>
              </li>
              <li>
                <a href="export.php">Export</a>
              </li>
              <li>
                <a href="site-health.php">Site Health</a>
              </li>
              <li>
                <a href="export-personal-data.php">Export Personal Data</a>
              </li>
              <li>
                <a href="erase-personal-data.php">Erase Personal Data</a>
              </li>
              <li>
                <a href="theme-editor.php">Theme File Editor</a>
              </li>
              <li>
                <a href="plugin-editor.php">Plugin File Editor</a>
              </li>
            </ul>
          </li>
          <li
            className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-settings menu-top-last"
            id="menu-settings"
          >
            <a
              href="options-general.php"
              className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-settings menu-top-last"
              aria-haspopup="true"
            >
              <div className="wp-menu-arrow">
                <div></div>
              </div>
              <div
                className="wp-menu-image dashicons-before dashicons-admin-settings"
                aria-hidden="true"
              >
                <br />
              </div>
              <div className="wp-menu-name">Settings</div>
            </a>
            <ul className="wp-submenu wp-submenu-wrap">
              <li className="wp-submenu-head" aria-hidden="true">
                Settings
              </li>
              <li className="wp-first-item">
                <a href="options-general.php" className="wp-first-item">
                  General
                </a>
              </li>
              <li>
                <a href="options-writing.php">Writing</a>
              </li>
              <li>
                <a href="options-reading.php">Reading</a>
              </li>
              <li>
                <a href="options-discussion.php">Discussion</a>
              </li>
              <li>
                <a href="options-media.php">Media</a>
              </li>
              <li>
                <a href="options-permalink.php">Permalinks</a>
              </li>
              <li>
                <a href="options-privacy.php">Privacy</a>
              </li>
            </ul>
          </li>
          <li id="collapse-menu" className="hide-if-no-js">
            <button
              type="button"
              id="collapse-button"
              aria-label="Collapse Main menu"
              aria-expanded="true"
            >
              <span className="collapse-button-icon" aria-hidden="true"></span>
              <span className="collapse-button-label">Collapse menu</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
