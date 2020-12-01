export default {
  // Home page, basic <title> and <description>
  appName: 'پینافور',
  appDescription: 'رابط کاربری فارسی و تحت وب برای ماستودون که با در نظر گرفتن سرعت و سادگی ساخته شده است.',
  homeDescription: `
    <p>
      Pinafore is a web client for
      <a rel="noopener" target="_blank" href="https://joinmastodon.org">Mastodon</a>,
      designed for speed and simplicity.
    </p>
    <p>
      Read the
      <a rel="noopener" target="_blank"
         href="https://nolanlawson.com/2018/04/09/introducing-pinafore-for-mastodon/">introductory blog post</a>,
      or get started by logging in to an instance:
    </p>`,
  logIn: 'ورود',
  footer: `
    <p>
      پینافور
      <a rel="noopener" target="_blank" href="https://github.com/nolanlawson/pinafore">نرم افزاری آزاد و متن باز</a>
      است که توسط
      <a rel="noopener" target="_blank" href="https://nolanlawson.com">Nolan Lawson</a>
      ساخته و تحت
      <a rel="noopener" target="_blank"
         href="https://github.com/nolanlawson/pinafore/blob/master/LICENSE">AGPL License</a>
         انتشار یافته است.
      Here is the <a href="/settings/about#privacy-policy" rel="prefetch">privacy policy</a>.
    </p>
  `,
  // Generic UI
  loading: 'درحال بارگیری',
  okay: 'تایید',
  cancel: 'لغو',
  alert: 'هشدار',
  close: 'بستن',
  error: 'خطا: {error}',
  errorShort: 'خطا:',
  // Relative timestamps
  justNow: 'همین حالا',
  // Navigation, page titles
  navItemLabel: `
    {label} {selected, select,
      true {(صفحه‌ی فعلی)}
      other {}
    } {name, select,
      notifications {{count, plural,
        =0 {}
        one {(۱ اعلان)}
        other {({count} اعلان)}
      }}
      community {{count, plural,
        =0 {}
        one {(۱ درخواست پیگیری)}
        other {({count} درخواست پیگیری)}
      }}
      other {}
    }
  `,
  blockedUsers: 'کاربران مسدود شده',
  bookmarks: 'نشان‌شده‌ها',
  directMessages: 'پیام‌های خصوصی',
  favorites: 'پسندیده‌ها',
  federated: 'فدراسیون',
  home: 'خانه',
  local: 'محلی',
  notifications: 'اعلان‌ها',
  mutedUsers: 'کاربران بیصدا شده',
  pinnedStatuses: 'بوق‌های سنجاق شده',
  followRequests: 'درخواست پیگیر شدن',
  followRequestsLabel: `درخواست‌های پیگیری {hasFollowRequests, select,
    true {({count})}
    other {}
  }`,
  list: 'لیست',
  search: 'جستجو',
  pageHeader: 'عنوان صفحه',
  goBack: 'بازگشت',
  back: 'بازگشت',
  profile: 'صفحه‌ی کاربری',
  federatedTimeline: 'خط‌زمانی فدراسیون',
  localTimeline: 'خط‌زمانی محلی',
  // community page
  community: 'جامعه',
  pinnableTimelines: 'خط‌زمانی‌های قابل سنجاق',
  timelines: 'خط‌زمانی',
  lists: 'لیست‌ها',
  instanceSettings: 'تنظیمات گره',
  notificationMentions: 'اعلان اشاره‌ها',
  profileWithMedia: 'صفحه‌ی شخصی با رسانه‌ها',
  profileWithReplies: 'صفحه‌ی شخصی با پاسخ‌ها',
  hashtag: 'هشتگ',
  // not logged in
  profileNotLoggedIn: 'بعد از ورود، خط‌زمانی کاربر در اینجا نمایش داده می‌شود.',
  bookmarksNotLoggedIn: 'بعد از ورود، نشان گذاری‌های شما در اینجا نمایش داده می‌شود.',
  directMessagesNotLoggedIn: 'بعد از ورود، پیام‌های شخصی در اینجا نمایش داده می‌شود.',
  favoritesNotLoggedIn: 'بعد از ورود، پسندیده شده‌های شما در اینجا نمایش داده می‌شود.',
  federatedTimelineNotLoggedIn: 'بعد از ورود، خط‌زمانی فدراسیون در اینجا نمایش داده می‌شود.',
  localTimelineNotLoggedIn: 'Your local timeline will appear here when logged in.',
  searchNotLoggedIn: 'You can search once logged in to an instance.',
  communityNotLoggedIn: 'Community options appear here when logged in.',
  listNotLoggedIn: 'A list will appear here when logged in.',
  notificationsNotLoggedIn: 'بعد از ورود، اعلان‌های شما در اینجا نمایش داده می‌شود.',
  notificationMentionsNotLoggedIn: 'بعد از ورود، اعلان‌های اشارات به شما در اینجا نمایش داده می‌شود.',
  statusNotLoggedIn: 'A toot thread will appear here when logged in.',
  tagNotLoggedIn: 'بعد از ورود، خط‌زمانی هشتگ در اینجا نمایش داده می‌شود.',
  // Notification subpages
  filters: 'فیلتر‌ها',
  all: 'همه',
  mentions: 'اشاره‌ها',
  // Follow requests
  approve: 'تایید',
  reject: 'رد',
  // Hotkeys
  hotkeys: 'کلید‌های میان‌بر',
  global: 'سراسری',
  timeline: 'خط‌زمانی',
  media: 'رسانه',
  globalHotkeys: `
    {leftRightChangesFocus, select,
      true {
        <li><kbd>→</kbd> to go to the next focusable element</li>
        <li><kbd>←</kbd> to go to the previous focusable element</li>
      }
      other {}
    }
    <li>
      <kbd>۱</kbd> - <kbd>۶</kbd>
      {leftRightChangesFocus, select,
        true {}
        other {یا <kbd>←</kbd>/<kbd>→</kbd>}
      }
        جابجایی بین ستون‌ها
    </li>
    <li><kbd>7</kbd> یا <kbd>c</kbd> نوشتن بوق جدید</li>
    <li><kbd>s</kbd> یا <kbd>/</kbd> جستجو</li>
    <li><kbd>g</kbd> + <kbd>h</kbd> خانه</li>
    <li><kbd>g</kbd> + <kbd>n</kbd> اعلان‌ها</li>
    <li><kbd>g</kbd> + <kbd>l</kbd> خط‌زمانی محلی</li>
    <li><kbd>g</kbd> + <kbd>t</kbd> خط‌زمانی فدریتد</li>
    <li><kbd>g</kbd> + <kbd>c</kbd> رفتن به صفحه‌ی جامعه</li>
    <li><kbd>g</kbd> + <kbd>d</kbd> رفتن به صفحه‌ی بحث‌ها</li>
    <li><kbd>h</kbd> یا <kbd>?</kbd> نمایش راهنما</li>
    <li><kbd>Backspace</kbd> رفتن به عقب یا بستن پنجره</li>
  `,
  timelineHotkeys: `
    <li><kbd>j</kbd> یا <kbd>↓</kbd> فعال‌سازی بوق بعدی</li>
    <li><kbd>k</kbd> یا <kbd>↑</kbd> فعال‌سازی بوق قبلی</li>
    <li><kbd>.</kbd> نمایش بیشتر و رفتن‌به بالای صفحه</li>
    <li><kbd>o</kbd> باز کردن</li>
    <li><kbd>f</kbd> پسندیدن</li>
    <li><kbd>b</kbd> بازبوق</li>
    <li><kbd>r</kbd> پاسخ دادن</li>
    <li><kbd>m</kbd> اشاره به نویسنده</li>
    <li><kbd>p</kbd> باز کردن پروفایل نویسنده</li>
    <li><kbd>l</kbd> باز کردن آدرس کارت در صفحه‌ای جدید</li>
    <li><kbd>x</kbd> نمایش یا پنهان کردن متن پشت اخطار محتوا</li>
    <li><kbd>y</kbd> نمایش یا پنهان‌سازی محتوای حساس</li>
  `,
  mediaHotkeys: `
    <li><kbd>←</kbd> / <kbd>→</kbd> رفتن به تصویر یا ویدیو‌ی بعدی یا قبلی </li>
  `,
  // Community page, tabs
  tabLabel: `{label} {current, select,
    true {(فعلی)}
    other {}
  }`,
  pageTitle: `
    {hasNotifications, select,
      true {({count})}
      other {}
    }
    {showInstanceName, select,
      true {{instanceName}}
      other {پینافور}
    }
    ·
    {name}
  `,
  pinLabel: `{label} {pinnable, select,
    true {
      {pinned, select,
        true {(سنجاق کردن صفحه)}
        other {(لغو سنجاق صفحه)}
      }
    }
    other {}
  }`,
  pinPage: 'سنجاق کردن {label}',
  // Status composition
  overLimit: '{count} {count, plural, =1 {کاراکتر} other {کاراکتر}} بیش از محدودیت ',
  underLimit: '{count} {count, plural, =1 {کاراکتر} other {کاراکتر}} مانده',
  composeStatus: 'Compose toot',
  postStatus: 'بوق!',
  contentWarning: 'هشدار محتوا',
  dropToUpload: 'Drop to upload',
  invalidFileType: 'Invalid file type',
  composeLabel: "چه چیزی در ذهن دارید؟",
  autocompleteDescription: 'When autocomplete results are available, press up or down arrows and enter to select.',
  mediaUploads: 'Media uploads',
  edit: 'ویرایش',
  delete: 'حذف',
  description: 'توضیحات',
  descriptionLabel: 'Describe for the visually impaired (image, video) or auditorily impaired (audio, video)',
  markAsSensitive: 'دارای محتوای حساس',
  // Polls
  createPoll: 'ساخت نظرسنجی',
  removePollChoice: 'حذف انتخاب {index}',
  pollChoiceLabel: 'انتخاب {index}',
  multipleChoice: 'چند انتخابی',
  pollDuration: 'مدت زمان نظرسنجی',
  fiveMinutes: '۵ دقیقه',
  thirtyMinutes: '۳۰ دقیقه',
  oneHour: '۱ ساعت',
  sixHours: '۶ ساعت',
  oneDay: '۱ روز',
  threeDays: '۳ روز',
  sevenDays: '۷ روز',
  addEmoji: 'افزودن شکلک',
  addMedia: 'افزودن رسانه (عکس، ویدیو، صدا)',
  addPoll: 'افزودن نظرسنجی',
  removePoll: 'حذف نظرسنجی',
  postPrivacyLabel: 'تغییر تنظیمات حریم شخصی (فعلی: {label})',
  addContentWarning: 'اضافه کردن هشدار محتوا',
  removeContentWarning: 'حذف هشدار محتوا',
  altLabel: 'Describe for the visually impaired',
  extractText: 'استخراج متن از عکس',
  extractingText: 'استخراج متن…',
  extractingTextCompletion: 'استخراج متن ({percent}% کامل شده)…',
  unableToExtractText: 'متنی استخراج نشد.',
  // Account options
  followAccount: 'پیگیری {account}',
  unfollowAccount: 'لغو پیگیری {account}',
  blockAccount: 'مسدود‌سازی {account}',
  unblockAccount: 'لغو مسدود‌سازی {account}',
  muteAccount: 'بیصدا‌سازی {account}',
  unmuteAccount: 'لغو بیصدا‌سازی {account}',
  showReblogsFromAccount: 'نمایش بازبوق‌های {account}',
  hideReblogsFromAccount: 'پنهان کردن بازبوق‌های {account}',
  showDomain: 'لغو پنهان سازی {domain}',
  hideDomain: 'پنهان سازی {domain}',
  reportAccount: 'گزارش {account}',
  mentionAccount: 'اشاره به {account}',
  copyLinkToAccount: 'کپی کردن لینک اکانت',
  copiedToClipboard: 'در کلیپ بورد کپی شد',
  // Media dialog
  navigateMedia: 'Navigate media items',
  showPreviousMedia: 'Show previous media',
  showNextMedia: 'Show next media',
  enterPinchZoom: 'Pinch-zoom mode',
  exitPinchZoom: 'Exit pinch-zoom mode',
  showMedia: `نمایش {index, select,
    1 {اولی}
    2 {دومی}
    3 {سومی}
    other {چهارمی}
  } media {current, select,
    true {(فعلی)}
    other {}
  }`,
  previewFocalPoint: 'Preview (focal point)',
  enterFocalPoint: 'Enter the focal point (X, Y) for this media',
  muteNotifications: 'Mute notifications as well',
  muteAccountConfirm: 'Mute {account}?',
  mute: 'Mute',
  unmute: 'Unmute',
  zoomOut: 'Zoom out',
  zoomIn: 'Zoom in',
  // Reporting
  reportingLabel: 'You are reporting {account} to the moderators of {instance}.',
  additionalComments: 'Additional comments',
  forwardDescription: 'Forward to the moderators of {instance} as well?',
  forwardLabel: 'Forward to {instance}',
  unableToLoadStatuses: 'Unable to load recent toots: {error}',
  report: 'Report',
  noContent: '(No content)',
  noStatuses: 'بوقی برای بازنشر وجود ندارد',
  // Status options
  unpinFromProfile: 'Unpin from profile',
  pinToProfile: 'Pin to profile',
  muteConversation: 'Mute conversation',
  unmuteConversation: 'Unmute conversation',
  bookmarkStatus: 'Bookmark toot',
  unbookmarkStatus: 'Unbookmark toot',
  deleteAndRedraft: 'حدف و پیشنویس',
  reportStatus: 'بازنشر بوق',
  shareStatus: 'اشتراک گذاری بوق',
  copyLinkToStatus: 'کپی کردن لینک به بوق',
  // Account profile
  profileForAccount: 'پروفایل {account}',
  statisticsAndMoreOptions: 'Stats and more options',
  statuses: 'بوف‌ها',
  follows: 'پی‌میگیرد',
  followers: 'پیگیر‌ها',
  moreOptions: 'گزینه‌های بیشتر',
  followersLabel: 'Followed by {count}',
  followingLabel: 'Follows {count}',
  followLabel: `Follow {requested, select,
    true {(follow requested)}
    other {}
  }`,
  unfollowLabel: `Unfollow {requested, select,
    true {(follow requested)}
    other {}
  }`,
  unblock: 'Unblock',
  nameAndFollowing: 'Name and following',
  clickToSeeAvatar: 'Click to see avatar',
  opensInNewWindow: '{label} (opens in new window)',
  blocked: 'Blocked',
  domainHidden: 'Domain hidden',
  muted: 'Muted',
  followsYou: 'شما را پی‌میگیرد.',
  avatarForAccount: 'Avatar for {account}',
  fields: 'Fields',
  accountHasMoved: '{account} has moved:',
  profilePageForAccount: 'Profile page for {account}',
  // About page
  about: 'درباره',
  aboutApp: 'درباره‌ی پینافور',
  aboutAppDescription: `
  <p>
    پینافور
    <a rel="noopener" target="_blank"
       href="https://github.com/nolanlawson/pinafore">نرم افزاری آزاد و متن باز</a>
    است که توسط
    <a rel="noopener" target="_blank" href="https://nolanlawson.com">Nolan Lawson</a>
    ساخته و تحت
    <a rel="noopener" target="_blank"
       href="https://github.com/nolanlawson/pinafore/blob/master/LICENSE">GNU Affero General Public License</a>
       انتشار یافته است.
  </p>

  <h2 id="privacy-policy">سیاست‌های حریم شخصی</h2>

  <p>
    پینافور داده‌های شخصی شما را روی سرورهایش نگه نمی‌دارد.
     نام، آدرس ایمیل، آدرس‌های اینترنتی، پست‌ها و عکس‌ها بخشی از چیزی است که پینافور داده‌های شخصی برمی‌شمارد.
  </p>

  <p>
    پینافور یک وبگاه ایستا بوده و تمامی داده‌ها در مرورگر شما انبار شده
     و برای پیوند با نمونه‌های فدیورس شما استفاده می‌شود.

  </p>

  <h2>قدردانی</h2>

  <p>
    برای آیکون‌ها از فونت<a rel="noopener" target="_blank" href="http://fontawesome.io/">Font Awesome</a> استفاده شده.
  </p>

  <p>
    برای لوگو از "sailboat" در
    <a rel="noopener" target="_blank" href="https://thenounproject.com/">the Noun Project</a>استفاده شده.
     با سپاس از George Cresnar.
  </p>`,
  // Settings
  settings: 'تنظیمات',
  general: 'کلی',
  generalSettings: 'تنظیمات کلی',
  showSensitive: 'نمایش پیش‌فرض محتوای حساس',
  showPlain: ' نمایش رنگ خاکستری ساده برای رسانه‌های حساس',
  allSensitive: 'حساس انگاشتن همه رسانه‌ها',
  largeMedia: 'Show large inline images and videos',
  autoplayGifs: 'پخش خودکار گیف‌ها',
  hideCards: 'Hide link preview cards',
  underlineLinks: 'Underline links in toots and profiles',
  accessibility: 'Accessibility',
  reduceMotion: 'Reduce motion in UI animations',
  disableTappable: 'Disable tappable area on entire toot',
  removeEmoji: 'Remove emoji from user display names',
  shortAria: 'Use short article ARIA labels',
  theme: 'Theme',
  themeForInstance: 'Theme for {instance}',
  disableCustomScrollbars: 'Disable custom scrollbars',
  preferences: 'Preferences',
  hotkeySettings: 'تنظیمات کلید‌های میان‌بر',
  disableHotkeys: 'Disable all hotkeys',
  leftRightArrows: 'Left/right arrow keys change focus rather than columns/media',
  guide: 'Guide',
  reload: 'Reload',
  // Wellness settings
  wellness: 'سلامتی',
  wellnessSettings: 'تنظیمات سلامتی',
  wellnessDescription: `تنظیمات سلامتی برای کاهش میزان اعتیاد یا جنبه‌های استرس زای شبکه‌های اجتماعی طراحی شده است.
    گزینه‌های دلخواه خود را انتخاب کنید.`,
  enableAll: 'فعال سازی همه',
  metrics: 'معیار‌ها',
  hideFollowerCount: 'پنهان‌سازی تعداد دنبال‌کنندگان (بیشترین ۱۰)',
  hideReblogCount: 'پنهان‌سازی تعداد بازبوق‌ها',
  hideFavoriteCount: 'پنهان‌سازی تعداد پسندیده‌شدن‌ها',
  hideUnread: ' پنهان‌سازی تعداد اعلان‌های خوانده نشده (منظور دایره قرمز کوچک است)',
  ui: 'اعلان‌ها',
  grayscaleMode: 'حالت خاکستری',
  wellnessFooter: `این تنظیمات بر پایه‌ی دستورالعمل‌های مرکز
    <a rel="noopener" target="_blank" href="https://humanetech.com">Center for Humane Technology</a> است.`,
  // This is a link: "You can filter or disable notifications in the _instance settings_"
  filterNotificationsPre: 'شما میتوانید اعلان‌های خود را در',
  filterNotificationsText: 'تنظیمات گره',
  filterNotificationsPost: 'فیلتر یا غیر فعال کنید.',
  // Custom tooltips, like "Disable _infinite scroll_", where you can click _infinite scroll_
  // to see a description. It's hard to properly internationalize, so we just break up the strings.
  disableInfiniteScrollPre: 'Disable',
  disableInfiniteScrollText: 'infinite scroll',
  disableInfiniteScrollDescription: `When infinite scroll is disabled, new toots will not automatically appear at
             the bottom or top of the timeline. Instead, buttons will allow you to
             load more content on demand.`,
  disableInfiniteScrollPost: '',
  // Instance settings
  loggedInAs: 'Logged in as',
  homeTimelineFilters: 'Home timeline filters',
  notificationFilters: 'Notification filters',
  pushNotifications: 'Push notifications',
  // Add instance page
  storageError: `It seems Pinafore cannot store data locally. Is your browser in private mode
          or blocking cookies? Pinafore stores all data locally, and requires LocalStorage and
          IndexedDB to work correctly.`,
  javaScriptError: 'You must enable JavaScript to log in.',
  enterInstanceName: 'نام گره را وارد کنید.',
  instanceColon: 'Instance:',
  // Custom tooltip, concatenated together
  getAnInstancePre: "Don't have an",
  getAnInstanceText: 'instance',
  getAnInstanceDescription: 'An instance is your Mastodon home server, such as mastodon.social or cybre.space.',
  getAnInstancePost: '?',
  joinMastodon: 'Join Mastodon!',
  instancesYouveLoggedInTo: "Instances you've logged in to:",
  addAnotherInstance: 'Add another instance',
  youreNotLoggedIn: "You're not logged in to any instances.",
  currentInstanceLabel: `{instance} {current, select,
    true {(current instance)}
    other {}
  }`,
  // Link text
  logInToAnInstancePre: '',
  logInToAnInstanceText: 'ورود به یک گره',
  logInToAnInstancePost: 'برای شروع کار با پینافور.',
  // Another custom tooltip
  showRingPre: 'همیشه نمایش بده',
  showRingText: 'focus ring',
  showRingDescription: `The focus ring is the outline showing the currently focused element. By default, it's only
    shown when using the keyboard (not mouse or touch), but you may choose to always show it.`,
  showRingPost: '',
  instances: 'Instances',
  addInstance: 'Add instance',
  homeTimelineFilterSettings: 'Home timeline filter settings',
  showReblogs: 'نمایش بازبوق‌ها',
  showReplies: 'نمایش پاسخ‌ها',
  switchOrLogOut: 'Switch to or log out of this instance',
  switchTo: 'Switch to this instance',
  switchToInstance: 'Switch to instance',
  switchToNameOfInstance: 'Switch to {instance}',
  logOut: 'خروج',
  logOutOfInstanceConfirm: 'آیا می‌خواهید از {instance} خارج شوید؟',
  notificationFilterSettings: 'Notification filter settings',
  // Push notifications
  browserDoesNotSupportPush: "Your browser doesn't support push notifications.",
  deniedPush: 'You have denied permission to show notifications.',
  pushNotificationsNote: 'Note that you can only have push notifications for one instance at a time.',
  pushSettings: 'Push notification settings',
  newFollowers: 'New followers',
  reblogs: 'بازبوق‌ها',
  pollResults: 'نتیجه‌ی نظرسنجی',
  needToReauthenticate: 'You need to reauthenticate in order to enable push notification. Log out of {instance}?',
  failedToUpdatePush: 'Failed to update push notification settings: {error}',
  // Themes
  chooseTheme: 'انتخاب تِم‌',
  darkBackground: 'پس‌زمینه‌ی تیره',
  lightBackground: 'پس‌زمینه‌ی روشن',
  themeLabel: `{label} {default, select,
    true {(default)}
    other {}
  }`,
  animatedImage: 'Animated image: {description}',
  showImage: `Show {animated, select,
    true {animated}
    other {}
  } image: {description}`,
  playVideoOrAudio: `Play {audio, select,
    true {audio}
    other {video}
  }: {description}`,
  accountFollowedYou: '{name} followed you, {account}',
  reblogCountsHidden: 'Boost counts hidden',
  favoriteCountsHidden: 'Favorite counts hidden',
  rebloggedTimes: `Boosted {count, plural,
    one {1 time}
    other {{count} times}
  }`,
  favoritedTimes: `Favorited {count, plural,
    one {1 time}
    other {{count} times}
  }`,
  pinnedStatus: 'بوق‌های سنجاق شده',
  rebloggedYou: 'بوق شما را بازبوق کرد',
  favoritedYou: 'بوق شما را پسندید',
  followedYou: 'پیگیر شما شد',
  pollYouCreatedEnded: 'نظرسنجی شما به پایان رسید',
  pollYouVotedEnded: 'نظرسنجی‌ای که در آن شرکت کرده‌اید به پایان رسید.',
  reblogged: 'بازبوق شده',
  showSensitiveMedia: 'نمایش محتوی حساس',
  hideSensitiveMedia: 'پنهان کردن محتوی حساس',
  clickToShowSensitive: 'Sensitive content. Click to show.',
  longPost: 'Long post',
  // Accessible status labels
  accountRebloggedYou: '{account} بوق شما را بازبوق کرد',
  accountFavoritedYou: '{account} بوق شما را پسندید',
  rebloggedByAccount: 'بازبوق شده توسط {account}',
  contentWarningContent: 'هشدار محتوی: {spoiler}',
  hasMedia: 'has media',
  hasPoll: 'has poll',
  shortStatusLabel: '{privacy} toot by {account}',
  // Privacy types
  public: 'همگانی',
  unlisted: 'لیست نشده',
  followersOnly: 'فقط پیگیر‌ها',
  direct: 'خصوصی',
  // Themes
  themeRoyal: 'Royal',
  themeScarlet: 'Scarlet',
  themeSeafoam: 'Seafoam',
  themeHotpants: 'Hotpants',
  themeOaken: 'Oaken',
  themeMajesty: 'Majesty',
  themeGecko: 'Gecko',
  themeGrayscale: 'Grayscale',
  themeOzark: 'Ozark',
  themeCobalt: 'Cobalt',
  themeSorcery: 'Sorcery',
  themePunk: 'Punk',
  themeRiot: 'Riot',
  themeHacker: 'Hacker',
  themeMastodon: 'Mastodon',
  themePitchBlack: 'Pitch Black',
  themeDarkGrayscale: 'Dark Grayscale',
  // Polls
  voteOnPoll: 'Vote on poll',
  pollChoices: 'Poll choices',
  vote: 'Vote',
  pollDetails: 'Poll details',
  refresh: 'Refresh',
  expires: 'Ends',
  expired: 'Ended',
  voteCount: `{count, plural,
    one {1 vote}
    other {{count} votes}
  }`,
  // Status interactions
  clickToShowThread: '{time} - click to show thread',
  showMore: 'Show more',
  showLess: 'Show less',
  closeReply: 'Close reply',
  cannotReblogFollowersOnly: 'Cannot be boosted because this is followers-only',
  cannotReblogDirectMessage: 'Cannot be boosted because this is a direct message',
  reblog: 'بازبوق',
  reply: 'پاسخ',
  replyToThread: 'Reply to thread',
  favorite: 'پسندیدن',
  unfavorite: 'Unfavorite',
  // timeline
  loadingMore: 'Loading more…',
  loadMore: 'بارگیری بیشتر',
  showCountMore: 'نمایش {count} مورد دیگر',
  nothingToShow: 'چیزی برای نمایش دادن نیست.',
  // status thread page
  statusThreadPage: 'Toot thread page',
  status: 'بوق',
  // toast messages
  blockedAccount: 'Blocked account',
  unblockedAccount: 'Unblocked account',
  unableToBlock: 'Unable to block account: {error}',
  unableToUnblock: 'Unable to unblock account: {error}',
  bookmarkedStatus: 'Bookmarked toot',
  unbookmarkedStatus: 'Unbookmarked toot',
  unableToBookmark: 'Unable to bookmark: {error}',
  unableToUnbookmark: 'Unable to unbookmark: {error}',
  cannotPostOffline: 'You cannot post while offline',
  unableToPost: 'Unable to post toot: {error}',
  statusDeleted: 'Toot deleted',
  unableToDelete: 'Unable to delete toot: {error}',
  cannotFavoriteOffline: 'You cannot favorite while offline',
  cannotUnfavoriteOffline: 'You cannot unfavorite while offline',
  unableToFavorite: 'Unable to favorite: {error}',
  unableToUnfavorite: 'Unable to unfavorite: {error}',
  followedAccount: 'Followed account',
  unfollowedAccount: 'Unfollowed account',
  unableToFollow: 'پیگیری ممکن نیست {error}',
  unableToUnfollow: 'لغو پیگیری ممکن نیست: {error}',
  accessTokenRevoked: 'اجازه ورود باطل شد خروج از {instance}',
  loggedOutOfInstance: 'خروج از {instance}',
  failedToUploadMedia: 'بارگذاری رسانه ممکن نیست: {error}',
  mutedAccount: 'حساب کاربری خاموش شده',
  unmutedAccount: 'حساب کاربری رفع خاموشی شده',
  unableToMute: 'خاموش کردن حساب کاربری ممکن نیست: {error}',
  unableToUnmute: 'رفع خاموشی حساب کاربری ممکن نیست: {error}',
  mutedConversation: 'گفتگوی خاموش شده',
  unmutedConversation: 'گفتگوی رفع خاموشی شده',
  unableToMuteConversation: 'خاموش کردن گفتگو ممکن نیست: {error}',
  unableToUnmuteConversation: 'رفع خاموشی گفتگو ممکن نیست: {error}',
  unpinnedStatus: 'بوق لفو سنجاق شده',
  unableToPinStatus: 'سنجاق شدن بوق ممکن نیست: {error}',
  unableToUnpinStatus: 'لغو سنجاق شدن بوق ممکن نیست: {error}',
  unableToRefreshPoll: 'تازه کردن بازبوق ممکن نیست: {error}',
  unableToVoteInPoll: 'رای دادن در نظرسنجی ممکن نیست: {error}',
  cannotReblogOffline: 'بازبوق هنگامی که آفلاین هستید ممکن نیست.',
  cannotUnreblogOffline: 'لغو بازبوق هنگامی که آفلاین هستید ممکن نیست.',
  failedToReblog: 'خطا در بازبوق {error}',
  failedToUnreblog: 'خطا در لغو بازبوق: {error}',
  submittedReport: 'گزارش فرستاده شده',
  failedToReport: 'خطا در گزارش: {error}',
  approvedFollowRequest: 'پذیرفتن درخواست پیگیری',
  rejectedFollowRequest: 'رد کردن درخواست پیگیری',
  unableToApproveFollowRequest: 'پذیرفتن درخواست پیگیری ممکن نیست {error}',
  unableToRejectFollowRequest: 'رد کردن درخواست پیگیری ممکن نیست: {error}',
  searchError: 'خطای جستجو: {error}',
  hidDomain: 'پنهان کردن دامنه',
  unhidDomain: 'نمایش دامنه',
  unableToHideDomain: 'پنهان کردن دامنه ممکن نیست: {error}',
  unableToUnhideDomain: 'نمایش دامنه ممکن نیست: {error}',
  showingReblogs: 'نمایش بازبوق‌ها',
  hidingReblogs: 'پنهان کردن بازبوق‌ها',
  unableToShowReblogs: 'نمایش بازبوق‌ها ممکن نیست: {error}',
  unableToHideReblogs: 'پنهان کردن بازبوق‌ها ممکن نیست: {error}',
  unableToShare: 'اشتراک گذاری ممکن نیست: {error}',
  showingOfflineContent: 'خطا در درخواست ارتبا، نمایش محتوای آفلاین.',
  youAreOffline: 'به نظر می‌آید ارتباط شما قطع است. اما همچنان می‌توانید بوق‌ها را بخوانید.',
  // Snackbar UI
  updateAvailable: 'بروزرسانی‌ای برای این برنامه موجود است.'
}
