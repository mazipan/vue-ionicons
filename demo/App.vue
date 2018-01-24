<template>
  <div id="app" class="VueSelectImage">

    <header role="header" class="site__header header">
      <div class="header__wrapper">
        <div class="header__brand">
          <a href="https://mazipan.github.io/demo/">
            <img src="https://mazipan.github.io/images/irfan-maulana.jpg" alt="Irfan Maulana" title="Irfan Maulana">
          </a>
          <div class="header__title">Irfan Maulana | Demo</div>
        </div>

        <a href="https://github.com/mazipan/vue-ionicons"
            target="_blank" style="margin-right: 2em;">
          <SocialGithubIcon :w="w" :h="h"/>
        </a>

      </div>
    </header>

    <div class="app">

      <div class="grid__row centered" style="margin-bottom:1em;">
        <h1 class="centered">
          {{ title }}
          <small> {{ subtitle }} </small>
        </h1>
        <img src="http://ionicons.com/img/ionicons-logo.png"/>
      </div>

      <div class="grid__row centered search__box">
        <input type="text" class="search__input"
                placeholder="Search Icon"
                v-model="searchText"/>
        <button class="search__btn">
          <IosSearchIcon/> Search
        </button>
      </div>

      <div class="grid__row">

        <div class="box" v-for="icon in icons" :key="icon.name">

          <component :is="icon.name"
                    :w="w"
                    :h="h">
          </component>

          <div class="box-content">
            {{ icon.libraryName }}
          </div>

        </div>

      </div>

    </div>

    <div class="grid__row content centered">
      <h2>Contribute</h2>
      <p>Feel free to fork <i class="fa fa-code-fork"></i> on <a href="https://github.com/mazipan/vue-ionicons" target="_blank">GitHub <i class="fa fa-github"></i></a> if you have any features <i class="fa fa-cart-plus"></i> or bugs <i class="fa fa-bug"></i>!</p>
    </div>
    <div class="grid__row content centered">
      <h2>Contact Developer</h2>
      <p>
        <a href="https://github.com/mazipan">
          <SocialGithubIcon :w="w" :h="h"/>
        </a>
        <a href="mailto:mazipanneh@gmail.com">
          <IosEmailIcon :w="w" :h="h" />
        </a>
        <a href="https://facebook.com/mazipanneh">
          <SocialFacebookIcon :w="w" :h="h"/>
        </a>
        <a href="https://twitter.com/Maz_Ipan">
          <SocialTwitterIcon :w="w" :h="h"/>
        </a>
        <a href="https://id.linkedin.com/in/irfanmaulanamazipan">
          <SocialLinkedinIcon :w="w" :h="h"/>
        </a>
      </p>
    </div>
    <div class="grid__row content centered">
      <p>Copyright © 2017 <a href="https://mazipanneh.com/blog/">Irfan Maulana</a>, All Rights Reserved.</p>
    </div>

  </div>
</template>

<script>
import AlertCircledIcon  from 'dist/alert-circled.vue'
import AlertIcon  from 'dist/alert.vue'
import AndroidAddCircleIcon  from 'dist/android-add-circle.vue'
import AndroidAddIcon  from 'dist/android-add.vue'
import AndroidAlarmClockIcon  from 'dist/android-alarm-clock.vue'
import AndroidAppsIcon  from 'dist/android-apps.vue'
import AndroidAlertIcon  from 'dist/android-alert.vue'
import AndroidArchiveIcon  from 'dist/android-archive.vue'
import AndroidArrowBackIcon  from 'dist/android-arrow-back.vue'
import AndroidArrowDownIcon  from 'dist/android-arrow-down.vue'
import AndroidArrowDropdownCircleIcon  from 'dist/android-arrow-dropdown-circle.vue'
import AndroidArrowDropdownIcon  from 'dist/android-arrow-dropdown.vue'
import AndroidArrowDropleftCircleIcon  from 'dist/android-arrow-dropleft-circle.vue'
import AndroidArrowDropleftIcon  from 'dist/android-arrow-dropleft.vue'
import AndroidArrowDroprightCircleIcon  from 'dist/android-arrow-dropright-circle.vue'
import AndroidArrowDroprightIcon  from 'dist/android-arrow-dropright.vue'
import AndroidArrowDropupCircleIcon  from 'dist/android-arrow-dropup-circle.vue'
import AndroidArrowDropupIcon  from 'dist/android-arrow-dropup.vue'
import AndroidArrowForwardIcon  from 'dist/android-arrow-forward.vue'
import AndroidArrowUpIcon  from 'dist/android-arrow-up.vue'
import AndroidAttachIcon  from 'dist/android-attach.vue'
import AndroidBarIcon  from 'dist/android-bar.vue'
import AndroidBicycleIcon  from 'dist/android-bicycle.vue'
import AndroidBoatIcon  from 'dist/android-boat.vue'
import AndroidBookmarkIcon  from 'dist/android-bookmark.vue'
import AndroidBulbIcon  from 'dist/android-bulb.vue'
import AndroidBusIcon  from 'dist/android-bus.vue'
import AndroidCalendarIcon  from 'dist/android-calendar.vue'
import AndroidCameraIcon  from 'dist/android-camera.vue'
import AndroidCallIcon  from 'dist/android-call.vue'
import AndroidCancelIcon  from 'dist/android-cancel.vue'
import AndroidChatIcon  from 'dist/android-chat.vue'
import AndroidCartIcon  from 'dist/android-cart.vue'
import AndroidCarIcon  from 'dist/android-car.vue'
import AndroidCheckboxBlankIcon  from 'dist/android-checkbox-blank.vue'
import AndroidCheckboxOutlineBlankIcon  from 'dist/android-checkbox-outline-blank.vue'
import AndroidCheckboxOutlineIcon  from 'dist/android-checkbox-outline.vue'
import AndroidCheckboxIcon  from 'dist/android-checkbox.vue'
import AndroidCheckmarkCircleIcon  from 'dist/android-checkmark-circle.vue'
import AndroidClipboardIcon  from 'dist/android-clipboard.vue'
import AndroidCloseIcon  from 'dist/android-close.vue'
import AndroidCloudCircleIcon  from 'dist/android-cloud-circle.vue'
import AndroidCloudDoneIcon  from 'dist/android-cloud-done.vue'
import AndroidCloudOutlineIcon  from 'dist/android-cloud-outline.vue'
import AndroidCloudIcon  from 'dist/android-cloud.vue'
import AndroidColorPaletteIcon  from 'dist/android-color-palette.vue'
import AndroidCompassIcon  from 'dist/android-compass.vue'
import AndroidContactIcon  from 'dist/android-contact.vue'
import AndroidContactsIcon  from 'dist/android-contacts.vue'
import AndroidContractIcon  from 'dist/android-contract.vue'
import AndroidCreateIcon  from 'dist/android-create.vue'
import AndroidDesktopIcon  from 'dist/android-desktop.vue'
import AndroidDocumentIcon  from 'dist/android-document.vue'
import AndroidDeleteIcon  from 'dist/android-delete.vue'
import AndroidDoneIcon  from 'dist/android-done.vue'
import AndroidDownloadIcon  from 'dist/android-download.vue'
import AndroidDoneAllIcon  from 'dist/android-done-all.vue'
import AndroidDraftsIcon  from 'dist/android-drafts.vue'
import AndroidFavoriteOutlineIcon  from 'dist/android-favorite-outline.vue'
import AndroidExpandIcon  from 'dist/android-expand.vue'
import AndroidExitIcon  from 'dist/android-exit.vue'
import AndroidFavoriteIcon  from 'dist/android-favorite.vue'
import AndroidFilmIcon  from 'dist/android-film.vue'
import AndroidFolderOpenIcon  from 'dist/android-folder-open.vue'
import AndroidFolderIcon  from 'dist/android-folder.vue'
import AndroidFunnelIcon  from 'dist/android-funnel.vue'
import AndroidGlobeIcon  from 'dist/android-globe.vue'
import AndroidHandIcon  from 'dist/android-hand.vue'
import AndroidHangoutIcon  from 'dist/android-hangout.vue'
import AndroidHappyIcon  from 'dist/android-happy.vue'
import AndroidHomeIcon  from 'dist/android-home.vue'
import AndroidImageIcon  from 'dist/android-image.vue'
import AndroidLaptopIcon  from 'dist/android-laptop.vue'
import AndroidListIcon  from 'dist/android-list.vue'
import AndroidLocateIcon  from 'dist/android-locate.vue'
import AndroidLockIcon  from 'dist/android-lock.vue'
import AndroidMailIcon  from 'dist/android-mail.vue'
import AndroidMapIcon  from 'dist/android-map.vue'
import AndroidMenuIcon  from 'dist/android-menu.vue'
import AndroidMicrophoneOffIcon  from 'dist/android-microphone-off.vue'
import AndroidMoreHorizontalIcon  from 'dist/android-more-horizontal.vue'
import AndroidNavigateIcon  from 'dist/android-navigate.vue'
import AndroidMicrophoneIcon  from 'dist/android-microphone.vue'
import AndroidMoreVerticalIcon  from 'dist/android-more-vertical.vue'
import AndroidNotificationsIcon  from 'dist/android-notifications.vue'
import AndroidNotificationsOffIcon  from 'dist/android-notifications-off.vue'
import AndroidNotificationsNoneIcon  from 'dist/android-notifications-none.vue'
import AndroidOpenIcon  from 'dist/android-open.vue'
import AndroidPersonAddIcon  from 'dist/android-person-add.vue'
import AndroidOptionsIcon  from 'dist/android-options.vue'
import AndroidPeopleIcon  from 'dist/android-people.vue'
import AndroidPersonIcon  from 'dist/android-person.vue'
import AndroidPhonePortraitIcon  from 'dist/android-phone-portrait.vue'
import AndroidPlaneIcon  from 'dist/android-plane.vue'
import AndroidPinIcon  from 'dist/android-pin.vue'
import AndroidPhoneLandscapeIcon  from 'dist/android-phone-landscape.vue'
import AndroidPrintIcon  from 'dist/android-print.vue'
import AndroidPlaystoreIcon  from 'dist/android-playstore.vue'
import AndroidRadioButtonOffIcon  from 'dist/android-radio-button-off.vue'
import AndroidRadioButtonOnIcon  from 'dist/android-radio-button-on.vue'
import AndroidRefreshIcon  from 'dist/android-refresh.vue'
import AndroidRemoveCircleIcon  from 'dist/android-remove-circle.vue'
import AndroidRemoveIcon  from 'dist/android-remove.vue'
import AndroidSadIcon  from 'dist/android-sad.vue'
import AndroidSearchIcon  from 'dist/android-search.vue'
import AndroidSendIcon  from 'dist/android-send.vue'
import AndroidRestaurantIcon  from 'dist/android-restaurant.vue'
import AndroidShareAltIcon  from 'dist/android-share-alt.vue'
import AndroidSettingsIcon  from 'dist/android-settings.vue'
import AndroidShareIcon  from 'dist/android-share.vue'
import AndroidStarHalfIcon  from 'dist/android-star-half.vue'
import AndroidStarOutlineIcon  from 'dist/android-star-outline.vue'
import AndroidSubwayIcon  from 'dist/android-subway.vue'
import AndroidStarIcon  from 'dist/android-star.vue'
import AndroidStopwatchIcon  from 'dist/android-stopwatch.vue'
import AndroidSunnyIcon  from 'dist/android-sunny.vue'
import AndroidSyncIcon  from 'dist/android-sync.vue'
import AndroidTextsmsIcon  from 'dist/android-textsms.vue'
import AndroidUploadIcon  from 'dist/android-upload.vue'
import AndroidTimeIcon  from 'dist/android-time.vue'
import AndroidVolumeMuteIcon  from 'dist/android-volume-mute.vue'
import AndroidTrainIcon  from 'dist/android-train.vue'
import AndroidVolumeUpIcon  from 'dist/android-volume-up.vue'
import AndroidUnlockIcon  from 'dist/android-unlock.vue'
import AndroidVolumeDownIcon  from 'dist/android-volume-down.vue'
import AndroidVolumeOffIcon  from 'dist/android-volume-off.vue'
import AndroidWatchIcon  from 'dist/android-watch.vue'
import AndroidWalkIcon  from 'dist/android-walk.vue'
import AndroidWifiIcon  from 'dist/android-wifi.vue'
import AndroidWarningIcon  from 'dist/android-warning.vue'
import ArchiveIcon  from 'dist/archive.vue'
import ApertureIcon  from 'dist/aperture.vue'
import ArrowDownBIcon  from 'dist/arrow-down-b.vue'
import ArrowExpandIcon  from 'dist/arrow-expand.vue'
import ArrowDownAIcon  from 'dist/arrow-down-a.vue'
import ArrowDownCIcon  from 'dist/arrow-down-c.vue'
import ArrowGraphDownRightIcon  from 'dist/arrow-graph-down-right.vue'
import ArrowGraphDownLeftIcon  from 'dist/arrow-graph-down-left.vue'
import ArrowGraphUpLeftIcon  from 'dist/arrow-graph-up-left.vue'
import ArrowGraphUpRightIcon  from 'dist/arrow-graph-up-right.vue'
import ArrowLeftAIcon  from 'dist/arrow-left-a.vue'
import ArrowMoveIcon  from 'dist/arrow-move.vue'
import ArrowLeftCIcon  from 'dist/arrow-left-c.vue'
import ArrowLeftBIcon  from 'dist/arrow-left-b.vue'
import ArrowResizeIcon  from 'dist/arrow-resize.vue'
import ArrowReturnLeftIcon  from 'dist/arrow-return-left.vue'
import ArrowRightAIcon  from 'dist/arrow-right-a.vue'
import ArrowReturnRightIcon  from 'dist/arrow-return-right.vue'
import ArrowRightBIcon  from 'dist/arrow-right-b.vue'
import ArrowRightCIcon  from 'dist/arrow-right-c.vue'
import ArrowShrinkIcon  from 'dist/arrow-shrink.vue'
import ArrowSwapIcon  from 'dist/arrow-swap.vue'
import ArrowUpAIcon  from 'dist/arrow-up-a.vue'
import ArrowUpBIcon  from 'dist/arrow-up-b.vue'
import ArrowUpCIcon  from 'dist/arrow-up-c.vue'
import BackspaceOutlineIcon  from 'dist/backspace-outline.vue'
import AsteriskIcon  from 'dist/asterisk.vue'
import AtIcon  from 'dist/at.vue'
import BagIcon  from 'dist/bag.vue'
import BackspaceIcon  from 'dist/backspace.vue'
import BatteryEmptyIcon  from 'dist/battery-empty.vue'
import BatteryChargingIcon  from 'dist/battery-charging.vue'
import BatteryFullIcon  from 'dist/battery-full.vue'
import BatteryLowIcon  from 'dist/battery-low.vue'
import BatteryHalfIcon  from 'dist/battery-half.vue'
import BeakerIcon  from 'dist/beaker.vue'
import BeerIcon  from 'dist/beer.vue'
import BonfireIcon  from 'dist/bonfire.vue'
import BluetoothIcon  from 'dist/bluetooth.vue'
import BookmarkIcon  from 'dist/bookmark.vue'
import BowtieIcon  from 'dist/bowtie.vue'
import BriefcaseIcon  from 'dist/briefcase.vue'
import BugIcon  from 'dist/bug.vue'
import CalculatorIcon  from 'dist/calculator.vue'
import CameraIcon  from 'dist/camera.vue'
import CashIcon  from 'dist/cash.vue'
import CardIcon  from 'dist/card.vue'
import CalendarIcon  from 'dist/calendar.vue'
import ChatboxWorkingIcon  from 'dist/chatbox-working.vue'
import ChatboxesIcon  from 'dist/chatboxes.vue'
import ChatboxIcon  from 'dist/chatbox.vue'
import ChatbubbleWorkingIcon  from 'dist/chatbubble-working.vue'
import ChatbubbleIcon  from 'dist/chatbubble.vue'
import ChatbubblesIcon  from 'dist/chatbubbles.vue'
import CheckmarkCircledIcon  from 'dist/checkmark-circled.vue'
import CheckmarkIcon  from 'dist/checkmark.vue'
import CheckmarkRoundIcon  from 'dist/checkmark-round.vue'
import ChevronLeftIcon  from 'dist/chevron-left.vue'
import ChevronRightIcon  from 'dist/chevron-right.vue'
import ChevronUpIcon  from 'dist/chevron-up.vue'
import ChevronDownIcon  from 'dist/chevron-down.vue'
import ClipboardIcon  from 'dist/clipboard.vue'
import ClockIcon  from 'dist/clock.vue'
import CloseCircledIcon  from 'dist/close-circled.vue'
import CloseRoundIcon  from 'dist/close-round.vue'
import CloseIcon  from 'dist/close.vue'
import ClosedCaptioningIcon  from 'dist/closed-captioning.vue'
import CloudIcon  from 'dist/cloud.vue'
import CodeDownloadIcon  from 'dist/code-download.vue'
import CodeWorkingIcon  from 'dist/code-working.vue'
import CodeIcon  from 'dist/code.vue'
import CoffeeIcon  from 'dist/coffee.vue'
import CompassIcon  from 'dist/compass.vue'
import ConnectionBarsIcon  from 'dist/connection-bars.vue'
import ComposeIcon  from 'dist/compose.vue'
import ContrastIcon  from 'dist/contrast.vue'
import CropIcon  from 'dist/crop.vue'
import CubeIcon  from 'dist/cube.vue'
import DiscIcon  from 'dist/disc.vue'
import DocumentTextIcon  from 'dist/document-text.vue'
import EarthIcon  from 'dist/earth.vue'
import EaselIcon  from 'dist/easel.vue'
import DocumentIcon  from 'dist/document.vue'
import EggIcon  from 'dist/egg.vue'
import EditIcon  from 'dist/edit.vue'
import DragIcon  from 'dist/drag.vue'
import EjectIcon  from 'dist/eject.vue'
import EmailUnreadIcon  from 'dist/email-unread.vue'
import EmailIcon  from 'dist/email.vue'
import ErlenmeyerFlaskBubblesIcon  from 'dist/erlenmeyer-flask-bubbles.vue'
import ErlenmeyerFlaskIcon  from 'dist/erlenmeyer-flask.vue'
import EyeIcon  from 'dist/eye.vue'
import FemaleIcon  from 'dist/female.vue'
import EyeDisabledIcon  from 'dist/eye-disabled.vue'
import FilingIcon  from 'dist/filing.vue'
import FilmMarkerIcon  from 'dist/film-marker.vue'
import FireballIcon  from 'dist/fireball.vue'
import FlagIcon  from 'dist/flag.vue'
import FlashOffIcon  from 'dist/flash-off.vue'
import FlameIcon  from 'dist/flame.vue'
import FolderIcon  from 'dist/folder.vue'
import FlashIcon  from 'dist/flash.vue'
import ForkIcon  from 'dist/fork.vue'
import ForkRepoIcon  from 'dist/fork-repo.vue'
import FunnelIcon  from 'dist/funnel.vue'
import ForwardIcon  from 'dist/forward.vue'
import GearAIcon  from 'dist/gear-a.vue'
import GearBIcon  from 'dist/gear-b.vue'
import HammerIcon  from 'dist/hammer.vue'
import HappyOutlineIcon  from 'dist/happy-outline.vue'
import GridIcon  from 'dist/grid.vue'
import HeadphoneIcon  from 'dist/headphone.vue'
import HappyIcon  from 'dist/happy.vue'
import HeartBrokenIcon  from 'dist/heart-broken.vue'
import HeartIcon  from 'dist/heart.vue'
import HelpBuoyIcon  from 'dist/help-buoy.vue'
import HelpCircledIcon  from 'dist/help-circled.vue'
import HelpIcon  from 'dist/help.vue'
import HomeIcon  from 'dist/home.vue'
import IcecreamIcon  from 'dist/icecream.vue'
import ImageIcon  from 'dist/image.vue'
import ImagesIcon  from 'dist/images.vue'
import InformationIcon  from 'dist/information.vue'
import IonicIcon  from 'dist/ionic.vue'
import InformationCircledIcon  from 'dist/information-circled.vue'
import IosAlarmIcon  from 'dist/ios-alarm.vue'
import IosAlbumsOutlineIcon  from 'dist/ios-albums-outline.vue'
import IosAlbumsIcon  from 'dist/ios-albums.vue'
import IosAlarmOutlineIcon  from 'dist/ios-alarm-outline.vue'
import IosAmericanfootballOutlineIcon  from 'dist/ios-americanfootball-outline.vue'
import IosAmericanfootballIcon  from 'dist/ios-americanfootball.vue'
import IosAnalyticsOutlineIcon  from 'dist/ios-analytics-outline.vue'
import IosAnalyticsIcon  from 'dist/ios-analytics.vue'
import IosArrowBackIcon  from 'dist/ios-arrow-back.vue'
import IosArrowDownIcon  from 'dist/ios-arrow-down.vue'
import IosArrowForwardIcon  from 'dist/ios-arrow-forward.vue'
import IosArrowLeftIcon  from 'dist/ios-arrow-left.vue'
import IosArrowThinDownIcon  from 'dist/ios-arrow-thin-down.vue'
import IosArrowThinLeftIcon  from 'dist/ios-arrow-thin-left.vue'
import IosArrowRightIcon  from 'dist/ios-arrow-right.vue'
import IosArrowThinRightIcon  from 'dist/ios-arrow-thin-right.vue'
import IosArrowThinUpIcon  from 'dist/ios-arrow-thin-up.vue'
import IosArrowUpIcon  from 'dist/ios-arrow-up.vue'
import IosAtOutlineIcon  from 'dist/ios-at-outline.vue'
import IosAtIcon  from 'dist/ios-at.vue'
import IosBarcodeOutlineIcon  from 'dist/ios-barcode-outline.vue'
import IosBarcodeIcon  from 'dist/ios-barcode.vue'
import IosBaseballOutlineIcon  from 'dist/ios-baseball-outline.vue'
import IosBaseballIcon  from 'dist/ios-baseball.vue'
import IosBasketballOutlineIcon  from 'dist/ios-basketball-outline.vue'
import IosBasketballIcon  from 'dist/ios-basketball.vue'
import IosBellOutlineIcon  from 'dist/ios-bell-outline.vue'
import IosBellIcon  from 'dist/ios-bell.vue'
import IosBodyOutlineIcon  from 'dist/ios-body-outline.vue'
import IosBodyIcon  from 'dist/ios-body.vue'
import IosBoltOutlineIcon  from 'dist/ios-bolt-outline.vue'
import IosBoltIcon  from 'dist/ios-bolt.vue'
import IosBookOutlineIcon  from 'dist/ios-book-outline.vue'
import IosBookIcon  from 'dist/ios-book.vue'
import IosBookmarksOutlineIcon  from 'dist/ios-bookmarks-outline.vue'
import IosBookmarksIcon  from 'dist/ios-bookmarks.vue'
import IosBoxIcon  from 'dist/ios-box.vue'
import IosBoxOutlineIcon  from 'dist/ios-box-outline.vue'
import IosBriefcaseOutlineIcon  from 'dist/ios-briefcase-outline.vue'
import IosBriefcaseIcon  from 'dist/ios-briefcase.vue'
import IosBrowsersIcon  from 'dist/ios-browsers.vue'
import IosBrowsersOutlineIcon  from 'dist/ios-browsers-outline.vue'
import IosCalculatorOutlineIcon  from 'dist/ios-calculator-outline.vue'
import IosCalculatorIcon  from 'dist/ios-calculator.vue'
import IosCalendarIcon  from 'dist/ios-calendar.vue'
import IosCameraOutlineIcon  from 'dist/ios-camera-outline.vue'
import IosCameraIcon  from 'dist/ios-camera.vue'
import IosCartIcon  from 'dist/ios-cart.vue'
import IosCalendarOutlineIcon  from 'dist/ios-calendar-outline.vue'
import IosChatboxesOutlineIcon  from 'dist/ios-chatboxes-outline.vue'
import IosChatbubbleOutlineIcon  from 'dist/ios-chatbubble-outline.vue'
import IosChatbubbleIcon  from 'dist/ios-chatbubble.vue'
import IosCartOutlineIcon  from 'dist/ios-cart-outline.vue'
import IosCheckmarkEmptyIcon  from 'dist/ios-checkmark-empty.vue'
import IosChatboxesIcon  from 'dist/ios-chatboxes.vue'
import IosCheckmarkOutlineIcon  from 'dist/ios-checkmark-outline.vue'
import IosCheckmarkIcon  from 'dist/ios-checkmark.vue'
import IosCircleFilledIcon  from 'dist/ios-circle-filled.vue'
import IosCircleOutlineIcon  from 'dist/ios-circle-outline.vue'
import IosClockOutlineIcon  from 'dist/ios-clock-outline.vue'
import IosClockIcon  from 'dist/ios-clock.vue'
import IosCloseOutlineIcon  from 'dist/ios-close-outline.vue'
import IosCloseEmptyIcon  from 'dist/ios-close-empty.vue'
import IosCloseIcon  from 'dist/ios-close.vue'
import IosCloudDownloadOutlineIcon  from 'dist/ios-cloud-download-outline.vue'
import IosCloudDownloadIcon  from 'dist/ios-cloud-download.vue'
import IosCloudOutlineIcon  from 'dist/ios-cloud-outline.vue'
import IosCloudUploadOutlineIcon  from 'dist/ios-cloud-upload-outline.vue'
import IosCloudIcon  from 'dist/ios-cloud.vue'
import IosCloudUploadIcon  from 'dist/ios-cloud-upload.vue'
import IosCloudyNightOutlineIcon  from 'dist/ios-cloudy-night-outline.vue'
import IosCloudyNightIcon  from 'dist/ios-cloudy-night.vue'
import IosCloudyOutlineIcon  from 'dist/ios-cloudy-outline.vue'
import IosCloudyIcon  from 'dist/ios-cloudy.vue'
import IosCogOutlineIcon  from 'dist/ios-cog-outline.vue'
import IosCogIcon  from 'dist/ios-cog.vue'
import IosColorFilterIcon  from 'dist/ios-color-filter.vue'
import IosColorFilterOutlineIcon  from 'dist/ios-color-filter-outline.vue'
import IosColorWandOutlineIcon  from 'dist/ios-color-wand-outline.vue'
import IosComposeIcon  from 'dist/ios-compose.vue'
import IosComposeOutlineIcon  from 'dist/ios-compose-outline.vue'
import IosContactOutlineIcon  from 'dist/ios-contact-outline.vue'
import IosColorWandIcon  from 'dist/ios-color-wand.vue'
import IosContactIcon  from 'dist/ios-contact.vue'
import IosCopyOutlineIcon  from 'dist/ios-copy-outline.vue'
import IosCopyIcon  from 'dist/ios-copy.vue'
import IosCropStrongIcon  from 'dist/ios-crop-strong.vue'
import IosCropIcon  from 'dist/ios-crop.vue'
import IosDragIcon  from 'dist/ios-drag.vue'
import IosDownloadOutlineIcon  from 'dist/ios-download-outline.vue'
import IosDownloadIcon  from 'dist/ios-download.vue'
import IosEmailOutlineIcon  from 'dist/ios-email-outline.vue'
import IosEyeOutlineIcon  from 'dist/ios-eye-outline.vue'
import IosEyeIcon  from 'dist/ios-eye.vue'
import IosFastforwardOutlineIcon  from 'dist/ios-fastforward-outline.vue'
import IosEmailIcon  from 'dist/ios-email.vue'
import IosFastforwardIcon  from 'dist/ios-fastforward.vue'
import IosFilingOutlineIcon  from 'dist/ios-filing-outline.vue'
import IosFilingIcon  from 'dist/ios-filing.vue'
import IosFilmOutlineIcon  from 'dist/ios-film-outline.vue'
import IosFilmIcon  from 'dist/ios-film.vue'
import IosFlagOutlineIcon  from 'dist/ios-flag-outline.vue'
import IosFlagIcon  from 'dist/ios-flag.vue'
import IosFlameOutlineIcon  from 'dist/ios-flame-outline.vue'
import IosFlameIcon  from 'dist/ios-flame.vue'
import IosFlaskOutlineIcon  from 'dist/ios-flask-outline.vue'
import IosFlaskIcon  from 'dist/ios-flask.vue'
import IosFlowerIcon  from 'dist/ios-flower.vue'
import IosFolderOutlineIcon  from 'dist/ios-folder-outline.vue'
import IosFolderIcon  from 'dist/ios-folder.vue'
import IosFootballOutlineIcon  from 'dist/ios-football-outline.vue'
import IosFootballIcon  from 'dist/ios-football.vue'
import IosGameControllerAOutlineIcon  from 'dist/ios-game-controller-a-outline.vue'
import IosFlowerOutlineIcon  from 'dist/ios-flower-outline.vue'
import IosGameControllerAIcon  from 'dist/ios-game-controller-a.vue'
import IosGameControllerBOutlineIcon  from 'dist/ios-game-controller-b-outline.vue'
import IosGameControllerBIcon  from 'dist/ios-game-controller-b.vue'
import IosGearOutlineIcon  from 'dist/ios-gear-outline.vue'
import IosGearIcon  from 'dist/ios-gear.vue'
import IosGlassesIcon  from 'dist/ios-glasses.vue'
import IosGlassesOutlineIcon  from 'dist/ios-glasses-outline.vue'
import IosGridViewOutlineIcon  from 'dist/ios-grid-view-outline.vue'
import IosGridViewIcon  from 'dist/ios-grid-view.vue'
import IosHelpEmptyIcon  from 'dist/ios-help-empty.vue'
import IosHeartIcon  from 'dist/ios-heart.vue'
import IosHeartOutlineIcon  from 'dist/ios-heart-outline.vue'
import IosHelpOutlineIcon  from 'dist/ios-help-outline.vue'
import IosHelpIcon  from 'dist/ios-help.vue'
import IosHomeOutlineIcon  from 'dist/ios-home-outline.vue'
import IosHomeIcon  from 'dist/ios-home.vue'
import IosInfiniteOutlineIcon  from 'dist/ios-infinite-outline.vue'
import IosInformationOutlineIcon  from 'dist/ios-information-outline.vue'
import IosInformationEmptyIcon  from 'dist/ios-information-empty.vue'
import IosInformationIcon  from 'dist/ios-information.vue'
import IosInfiniteIcon  from 'dist/ios-infinite.vue'
import IosIonicOutlineIcon  from 'dist/ios-ionic-outline.vue'
import IosKeypadOutlineIcon  from 'dist/ios-keypad-outline.vue'
import IosKeypadIcon  from 'dist/ios-keypad.vue'
import IosLightbulbOutlineIcon  from 'dist/ios-lightbulb-outline.vue'
import IosLightbulbIcon  from 'dist/ios-lightbulb.vue'
import IosListOutlineIcon  from 'dist/ios-list-outline.vue'
import IosListIcon  from 'dist/ios-list.vue'
import IosLocationOutlineIcon  from 'dist/ios-location-outline.vue'
import IosLocationIcon  from 'dist/ios-location.vue'
import IosLockedOutlineIcon  from 'dist/ios-locked-outline.vue'
import IosLockedIcon  from 'dist/ios-locked.vue'
import IosLoopStrongIcon  from 'dist/ios-loop-strong.vue'
import IosLoopIcon  from 'dist/ios-loop.vue'
import IosMedicalOutlineIcon  from 'dist/ios-medical-outline.vue'
import IosMedicalIcon  from 'dist/ios-medical.vue'
import IosMedkitOutlineIcon  from 'dist/ios-medkit-outline.vue'
import IosMicOutlineIcon  from 'dist/ios-mic-outline.vue'
import IosMicOffIcon  from 'dist/ios-mic-off.vue'
import IosMicIcon  from 'dist/ios-mic.vue'
import IosMinusEmptyIcon  from 'dist/ios-minus-empty.vue'
import IosMedkitIcon  from 'dist/ios-medkit.vue'
import IosMinusOutlineIcon  from 'dist/ios-minus-outline.vue'
import IosMinusIcon  from 'dist/ios-minus.vue'
import IosMonitorOutlineIcon  from 'dist/ios-monitor-outline.vue'
import IosMonitorIcon  from 'dist/ios-monitor.vue'
import IosMoonOutlineIcon  from 'dist/ios-moon-outline.vue'
import IosMoreOutlineIcon  from 'dist/ios-more-outline.vue'
import IosMoonIcon  from 'dist/ios-moon.vue'
import IosMoreIcon  from 'dist/ios-more.vue'
import IosMusicalNoteIcon  from 'dist/ios-musical-note.vue'
import IosNavigateOutlineIcon  from 'dist/ios-navigate-outline.vue'
import IosMusicalNotesIcon  from 'dist/ios-musical-notes.vue'
import IosNavigateIcon  from 'dist/ios-navigate.vue'
import IosNutritionOutlineIcon  from 'dist/ios-nutrition-outline.vue'
import IosPaperOutlineIcon  from 'dist/ios-paper-outline.vue'
import IosPaperIcon  from 'dist/ios-paper.vue'
import IosNutritionIcon  from 'dist/ios-nutrition.vue'
import IosPaperplaneOutlineIcon  from 'dist/ios-paperplane-outline.vue'
import IosPaperplaneIcon  from 'dist/ios-paperplane.vue'
import IosPartlysunnyOutlineIcon  from 'dist/ios-partlysunny-outline.vue'
import IosPartlysunnyIcon  from 'dist/ios-partlysunny.vue'
import IosPauseOutlineIcon  from 'dist/ios-pause-outline.vue'
import IosPawOutlineIcon  from 'dist/ios-paw-outline.vue'
import IosPauseIcon  from 'dist/ios-pause.vue'
import IosPeopleOutlineIcon  from 'dist/ios-people-outline.vue'
import IosPeopleIcon  from 'dist/ios-people.vue'
import IosPersonOutlineIcon  from 'dist/ios-person-outline.vue'
import IosPersonIcon  from 'dist/ios-person.vue'
import IosPawIcon  from 'dist/ios-paw.vue'
import IosPersonaddOutlineIcon  from 'dist/ios-personadd-outline.vue'
import IosPersonaddIcon  from 'dist/ios-personadd.vue'
import IosPhotosOutlineIcon  from 'dist/ios-photos-outline.vue'
import IosPhotosIcon  from 'dist/ios-photos.vue'
import IosPieOutlineIcon  from 'dist/ios-pie-outline.vue'
import IosPieIcon  from 'dist/ios-pie.vue'
import IosPintOutlineIcon  from 'dist/ios-pint-outline.vue'
import IosPintIcon  from 'dist/ios-pint.vue'
import IosPlayOutlineIcon  from 'dist/ios-play-outline.vue'
import IosPlayIcon  from 'dist/ios-play.vue'
import IosPlusEmptyIcon  from 'dist/ios-plus-empty.vue'
import IosPlusOutlineIcon  from 'dist/ios-plus-outline.vue'
import IosPlusIcon  from 'dist/ios-plus.vue'
import IosPricetagOutlineIcon  from 'dist/ios-pricetag-outline.vue'
import IosPricetagIcon  from 'dist/ios-pricetag.vue'
import IosPricetagsOutlineIcon  from 'dist/ios-pricetags-outline.vue'
import IosPricetagsIcon  from 'dist/ios-pricetags.vue'
import IosPrinterIcon  from 'dist/ios-printer.vue'
import IosPulseStrongIcon  from 'dist/ios-pulse-strong.vue'
import IosPrinterOutlineIcon  from 'dist/ios-printer-outline.vue'
import IosPulseIcon  from 'dist/ios-pulse.vue'
import IosRainyOutlineIcon  from 'dist/ios-rainy-outline.vue'
import IosRainyIcon  from 'dist/ios-rainy.vue'
import IosRecordingOutlineIcon  from 'dist/ios-recording-outline.vue'
import IosRecordingIcon  from 'dist/ios-recording.vue'
import IosRedoOutlineIcon  from 'dist/ios-redo-outline.vue'
import IosRedoIcon  from 'dist/ios-redo.vue'
import IosRefreshEmptyIcon  from 'dist/ios-refresh-empty.vue'
import IosRefreshOutlineIcon  from 'dist/ios-refresh-outline.vue'
import IosRefreshIcon  from 'dist/ios-refresh.vue'
import IosReloadIcon  from 'dist/ios-reload.vue'
import IosReverseCameraOutlineIcon  from 'dist/ios-reverse-camera-outline.vue'
import IosReverseCameraIcon  from 'dist/ios-reverse-camera.vue'
import IosRewindOutlineIcon  from 'dist/ios-rewind-outline.vue'
import IosRewindIcon  from 'dist/ios-rewind.vue'
import IosRoseIcon  from 'dist/ios-rose.vue'
import IosRoseOutlineIcon  from 'dist/ios-rose-outline.vue'
import IosSearchStrongIcon  from 'dist/ios-search-strong.vue'
import IosSearchIcon  from 'dist/ios-search.vue'
import IosSettingsStrongIcon  from 'dist/ios-settings-strong.vue'
import IosSettingsIcon  from 'dist/ios-settings.vue'
import IosShuffleStrongIcon  from 'dist/ios-shuffle-strong.vue'
import IosShuffleIcon  from 'dist/ios-shuffle.vue'
import IosSkipbackwardOutlineIcon  from 'dist/ios-skipbackward-outline.vue'
import IosSkipbackwardIcon  from 'dist/ios-skipbackward.vue'
import IosSkipforwardIcon  from 'dist/ios-skipforward.vue'
import IosSkipforwardOutlineIcon  from 'dist/ios-skipforward-outline.vue'
import IosSnowyIcon  from 'dist/ios-snowy.vue'
import IosSpeedometerOutlineIcon  from 'dist/ios-speedometer-outline.vue'
import IosSpeedometerIcon  from 'dist/ios-speedometer.vue'
import IosStarHalfIcon  from 'dist/ios-star-half.vue'
import IosStarOutlineIcon  from 'dist/ios-star-outline.vue'
import IosStarIcon  from 'dist/ios-star.vue'
import IosStopwatchOutlineIcon  from 'dist/ios-stopwatch-outline.vue'
import IosStopwatchIcon  from 'dist/ios-stopwatch.vue'
import IosSunnyOutlineIcon  from 'dist/ios-sunny-outline.vue'
import IosSunnyIcon  from 'dist/ios-sunny.vue'
import IosTelephoneOutlineIcon  from 'dist/ios-telephone-outline.vue'
import IosTelephoneIcon  from 'dist/ios-telephone.vue'
import IosTennisballOutlineIcon  from 'dist/ios-tennisball-outline.vue'
import IosTennisballIcon  from 'dist/ios-tennisball.vue'
import IosThunderstormOutlineIcon  from 'dist/ios-thunderstorm-outline.vue'
import IosThunderstormIcon  from 'dist/ios-thunderstorm.vue'
import IosTimeOutlineIcon  from 'dist/ios-time-outline.vue'
import IosTimeIcon  from 'dist/ios-time.vue'
import IosTimerOutlineIcon  from 'dist/ios-timer-outline.vue'
import IosTimerIcon  from 'dist/ios-timer.vue'
import IosToggleOutlineIcon  from 'dist/ios-toggle-outline.vue'
import IosToggleIcon  from 'dist/ios-toggle.vue'
import IosTrashOutlineIcon  from 'dist/ios-trash-outline.vue'
import IosUndoIcon  from 'dist/ios-undo.vue'
import IosTrashIcon  from 'dist/ios-trash.vue'
import IosUnlockedOutlineIcon  from 'dist/ios-unlocked-outline.vue'
import IosUndoOutlineIcon  from 'dist/ios-undo-outline.vue'
import IosUnlockedIcon  from 'dist/ios-unlocked.vue'
import IosUploadOutlineIcon  from 'dist/ios-upload-outline.vue'
import IosUploadIcon  from 'dist/ios-upload.vue'
import IosVideocamIcon  from 'dist/ios-videocam.vue'
import IosVideocamOutlineIcon  from 'dist/ios-videocam-outline.vue'
import IosVolumeLowIcon  from 'dist/ios-volume-low.vue'
import IosVolumeHighIcon  from 'dist/ios-volume-high.vue'
import IosWineglassOutlineIcon  from 'dist/ios-wineglass-outline.vue'
import IosWorldOutlineIcon  from 'dist/ios-world-outline.vue'
import IosWorldIcon  from 'dist/ios-world.vue'
import IosWineglassIcon  from 'dist/ios-wineglass.vue'
import IpodIcon  from 'dist/ipod.vue'
import IphoneIcon  from 'dist/iphone.vue'
import JetIcon  from 'dist/jet.vue'
import IpadIcon  from 'dist/ipad.vue'
import KeyIcon  from 'dist/key.vue'
import KnifeIcon  from 'dist/knife.vue'
import LightbulbIcon  from 'dist/lightbulb.vue'
import LevelsIcon  from 'dist/levels.vue'
import LaptopIcon  from 'dist/laptop.vue'
import LeafIcon  from 'dist/leaf.vue'
import LoadAIcon  from 'dist/load-a.vue'
import LoadCIcon  from 'dist/load-c.vue'
import LoadBIcon  from 'dist/load-b.vue'
import LocationIcon  from 'dist/location.vue'
import LockCombinationIcon  from 'dist/lock-combination.vue'
import LoadDIcon  from 'dist/load-d.vue'
import LinkIcon  from 'dist/link.vue'
import LockedIcon  from 'dist/locked.vue'
import LoopIcon  from 'dist/loop.vue'
import LogInIcon  from 'dist/log-in.vue'
import LogOutIcon  from 'dist/log-out.vue'
import MaleIcon  from 'dist/male.vue'
import MagnetIcon  from 'dist/magnet.vue'
import ManIcon  from 'dist/man.vue'
import MapIcon  from 'dist/map.vue'
import MedkitIcon  from 'dist/medkit.vue'
import MergeIcon  from 'dist/merge.vue'
import MicAIcon  from 'dist/mic-a.vue'
import MicBIcon  from 'dist/mic-b.vue'
import MicCIcon  from 'dist/mic-c.vue'
import MinusCircledIcon  from 'dist/minus-circled.vue'
import MinusRoundIcon  from 'dist/minus-round.vue'
import ModelSIcon  from 'dist/model-s.vue'
import MinusIcon  from 'dist/minus.vue'
import MouseIcon  from 'dist/mouse.vue'
import MoreIcon  from 'dist/more.vue'
import MusicNoteIcon  from 'dist/music-note.vue'
import NaviconRoundIcon  from 'dist/navicon-round.vue'
import NavigateIcon  from 'dist/navigate.vue'
import MonitorIcon  from 'dist/monitor.vue'
import NaviconIcon  from 'dist/navicon.vue'
import NoSmokingIcon  from 'dist/no-smoking.vue'
import NetworkIcon  from 'dist/network.vue'
import NuclearIcon  from 'dist/nuclear.vue'
import OutletIcon  from 'dist/outlet.vue'
import PaintbrushIcon  from 'dist/paintbrush.vue'
import PaintbucketIcon  from 'dist/paintbucket.vue'
import PaperclipIcon  from 'dist/paperclip.vue'
import PaperAirplaneIcon  from 'dist/paper-airplane.vue'
import PauseIcon  from 'dist/pause.vue'
import PersonStalkerIcon  from 'dist/person-stalker.vue'
import PersonIcon  from 'dist/person.vue'
import PersonAddIcon  from 'dist/person-add.vue'
import PinIcon  from 'dist/pin.vue'
import PieGraphIcon  from 'dist/pie-graph.vue'
import PinpointIcon  from 'dist/pinpoint.vue'
import PizzaIcon  from 'dist/pizza.vue'
import PlaneIcon  from 'dist/plane.vue'
import PlayIcon  from 'dist/play.vue'
import PlaystationIcon  from 'dist/playstation.vue'
import PlusRoundIcon  from 'dist/plus-round.vue'
import PlanetIcon  from 'dist/planet.vue'
import PlusCircledIcon  from 'dist/plus-circled.vue'
import PlusIcon  from 'dist/plus.vue'
import PodiumIcon  from 'dist/podium.vue'
import PowerIcon  from 'dist/power.vue'
import PoundIcon  from 'dist/pound.vue'
import PricetagIcon  from 'dist/pricetag.vue'
import PullRequestIcon  from 'dist/pull-request.vue'
import PrinterIcon  from 'dist/printer.vue'
import QrScannerIcon  from 'dist/qr-scanner.vue'
import PricetagsIcon  from 'dist/pricetags.vue'
import RadioWavesIcon  from 'dist/radio-waves.vue'
import QuoteIcon  from 'dist/quote.vue'
import RecordIcon  from 'dist/record.vue'
import ReplyAllIcon  from 'dist/reply-all.vue'
import ReplyIcon  from 'dist/reply.vue'
import RefreshIcon  from 'dist/refresh.vue'
import RibbonAIcon  from 'dist/ribbon-a.vue'
import SadOutlineIcon  from 'dist/sad-outline.vue'
import RibbonBIcon  from 'dist/ribbon-b.vue'
import ScissorsIcon  from 'dist/scissors.vue'
import SearchIcon  from 'dist/search.vue'
import SadIcon  from 'dist/sad.vue'
import SettingsIcon  from 'dist/settings.vue'
import ShareIcon  from 'dist/share.vue'
import ShuffleIcon  from 'dist/shuffle.vue'
import SkipForwardIcon  from 'dist/skip-forward.vue'
import SkipBackwardIcon  from 'dist/skip-backward.vue'
import SocialAndroidOutlineIcon  from 'dist/social-android-outline.vue'
import SocialAngularOutlineIcon  from 'dist/social-angular-outline.vue'
import SocialAndroidIcon  from 'dist/social-android.vue'
import SocialAngularIcon  from 'dist/social-angular.vue'
import SocialAppleIcon  from 'dist/social-apple.vue'
import SocialBitcoinOutlineIcon  from 'dist/social-bitcoin-outline.vue'
import SocialAppleOutlineIcon  from 'dist/social-apple-outline.vue'
import SocialBitcoinIcon  from 'dist/social-bitcoin.vue'
import SocialBufferOutlineIcon  from 'dist/social-buffer-outline.vue'
import SocialBufferIcon  from 'dist/social-buffer.vue'
import SocialChromeOutlineIcon  from 'dist/social-chrome-outline.vue'
import SocialChromeIcon  from 'dist/social-chrome.vue'
import SocialCodepenOutlineIcon  from 'dist/social-codepen-outline.vue'
import SocialCodepenIcon  from 'dist/social-codepen.vue'
import SocialCss3OutlineIcon  from 'dist/social-css3-outline.vue'
import SocialCss3Icon  from 'dist/social-css3.vue'
import SocialDesignernewsOutlineIcon  from 'dist/social-designernews-outline.vue'
import SocialDribbbleOutlineIcon  from 'dist/social-dribbble-outline.vue'
import SocialDribbbleIcon  from 'dist/social-dribbble.vue'
import SocialDesignernewsIcon  from 'dist/social-designernews.vue'
import SocialDropboxOutlineIcon  from 'dist/social-dropbox-outline.vue'
import SocialDropboxIcon  from 'dist/social-dropbox.vue'
import SocialEuroOutlineIcon  from 'dist/social-euro-outline.vue'
import SocialEuroIcon  from 'dist/social-euro.vue'
import SocialFacebookOutlineIcon  from 'dist/social-facebook-outline.vue'
import SocialFacebookIcon  from 'dist/social-facebook.vue'
import SocialFoursquareOutlineIcon  from 'dist/social-foursquare-outline.vue'
import SocialFoursquareIcon  from 'dist/social-foursquare.vue'
import SocialFreebsdDevilIcon  from 'dist/social-freebsd-devil.vue'
import SocialGithubOutlineIcon  from 'dist/social-github-outline.vue'
import SocialGithubIcon  from 'dist/social-github.vue'
import SocialGoogleOutlineIcon  from 'dist/social-google-outline.vue'
import SocialGoogleIcon  from 'dist/social-google.vue'
import SocialGoogleplusOutlineIcon  from 'dist/social-googleplus-outline.vue'
import SocialGoogleplusIcon  from 'dist/social-googleplus.vue'
import SocialHackernewsOutlineIcon  from 'dist/social-hackernews-outline.vue'
import SocialHackernewsIcon  from 'dist/social-hackernews.vue'
import SocialHtml5OutlineIcon  from 'dist/social-html5-outline.vue'
import SocialHtml5Icon  from 'dist/social-html5.vue'
import SocialInstagramOutlineIcon  from 'dist/social-instagram-outline.vue'
import SocialInstagramIcon  from 'dist/social-instagram.vue'
import SocialJavascriptOutlineIcon  from 'dist/social-javascript-outline.vue'
import SocialJavascriptIcon  from 'dist/social-javascript.vue'
import SocialLinkedinOutlineIcon  from 'dist/social-linkedin-outline.vue'
import SocialLinkedinIcon  from 'dist/social-linkedin.vue'
import SocialMarkdownIcon  from 'dist/social-markdown.vue'
import SocialNodejsIcon  from 'dist/social-nodejs.vue'
import SocialOctocatIcon  from 'dist/social-octocat.vue'
import SocialPinterestIcon  from 'dist/social-pinterest.vue'
import SocialPinterestOutlineIcon  from 'dist/social-pinterest-outline.vue'
import SocialPythonIcon  from 'dist/social-python.vue'
import SocialRedditOutlineIcon  from 'dist/social-reddit-outline.vue'
import SocialRedditIcon  from 'dist/social-reddit.vue'
import SocialRssIcon  from 'dist/social-rss.vue'
import SocialRssOutlineIcon  from 'dist/social-rss-outline.vue'
import SocialSassIcon  from 'dist/social-sass.vue'
import SocialSkypeOutlineIcon  from 'dist/social-skype-outline.vue'
import SocialSkypeIcon  from 'dist/social-skype.vue'
import SocialSnapchatOutlineIcon  from 'dist/social-snapchat-outline.vue'
import SocialSnapchatIcon  from 'dist/social-snapchat.vue'
import SocialTumblrOutlineIcon  from 'dist/social-tumblr-outline.vue'
import SocialTumblrIcon  from 'dist/social-tumblr.vue'
import SocialTwitchOutlineIcon  from 'dist/social-twitch-outline.vue'
import SocialTuxIcon  from 'dist/social-tux.vue'
import SocialTwitchIcon  from 'dist/social-twitch.vue'
import SocialTwitterOutlineIcon  from 'dist/social-twitter-outline.vue'
import SocialUsdOutlineIcon  from 'dist/social-usd-outline.vue'
import SocialUsdIcon  from 'dist/social-usd.vue'
import SocialTwitterIcon  from 'dist/social-twitter.vue'
import SocialVimeoOutlineIcon  from 'dist/social-vimeo-outline.vue'
import SocialVimeoIcon  from 'dist/social-vimeo.vue'
import SocialWhatsappOutlineIcon  from 'dist/social-whatsapp-outline.vue'
import SocialWhatsappIcon  from 'dist/social-whatsapp.vue'
import SocialWindowsOutlineIcon  from 'dist/social-windows-outline.vue'
import SocialWindowsIcon  from 'dist/social-windows.vue'
import SocialWordpressOutlineIcon  from 'dist/social-wordpress-outline.vue'
import SocialWordpressIcon  from 'dist/social-wordpress.vue'
import SocialYahooOutlineIcon  from 'dist/social-yahoo-outline.vue'
import SocialYahooIcon  from 'dist/social-yahoo.vue'
import SocialYenOutlineIcon  from 'dist/social-yen-outline.vue'
import SocialYenIcon  from 'dist/social-yen.vue'
import SocialYoutubeOutlineIcon  from 'dist/social-youtube-outline.vue'
import SoupCanOutlineIcon  from 'dist/soup-can-outline.vue'
import SocialYoutubeIcon  from 'dist/social-youtube.vue'
import SoupCanIcon  from 'dist/soup-can.vue'
import SpeakerphoneIcon  from 'dist/speakerphone.vue'
import SpeedometerIcon  from 'dist/speedometer.vue'
import StarIcon  from 'dist/star.vue'
import StatsBarsIcon  from 'dist/stats-bars.vue'
import SteamIcon  from 'dist/steam.vue'
import SpoonIcon  from 'dist/spoon.vue'
import StopIcon  from 'dist/stop.vue'
import ThermometerIcon  from 'dist/thermometer.vue'
import ThumbsdownIcon  from 'dist/thumbsdown.vue'
import ThumbsupIcon  from 'dist/thumbsup.vue'
import ToggleIcon  from 'dist/toggle.vue'
import ToggleFilledIcon  from 'dist/toggle-filled.vue'
import TransgenderIcon  from 'dist/transgender.vue'
import TrashAIcon  from 'dist/trash-a.vue'
import TrashBIcon  from 'dist/trash-b.vue'
import TrophyIcon  from 'dist/trophy.vue'
import TshirtOutlineIcon  from 'dist/tshirt-outline.vue'
import UmbrellaIcon  from 'dist/umbrella.vue'
import TshirtIcon  from 'dist/tshirt.vue'
import UploadIcon  from 'dist/upload.vue'
import UniversityIcon  from 'dist/university.vue'
import UnlockedIcon  from 'dist/unlocked.vue'
import UsbIcon  from 'dist/usb.vue'
import VolumeLowIcon  from 'dist/volume-low.vue'
import VolumeHighIcon  from 'dist/volume-high.vue'
import VideocameraIcon  from 'dist/videocamera.vue'
import VolumeMediumIcon  from 'dist/volume-medium.vue'
import WaterdropIcon  from 'dist/waterdrop.vue'
import WandIcon  from 'dist/wand.vue'
import WifiIcon  from 'dist/wifi.vue'
import VolumeMuteIcon  from 'dist/volume-mute.vue'
import WineglassIcon  from 'dist/wineglass.vue'
import WrenchIcon  from 'dist/wrench.vue'
import XboxIcon  from 'dist/xbox.vue'
import WomanIcon  from 'dist/woman.vue'

export default {
  name: 'app',
  components: {
    AlertCircledIcon,
    AlertIcon,
    AndroidAddCircleIcon,
    AndroidAddIcon,
    AndroidAlarmClockIcon,
    AndroidAppsIcon,
    AndroidAlertIcon,
    AndroidArchiveIcon,
    AndroidArrowBackIcon,
    AndroidArrowDownIcon,
    AndroidArrowDropdownCircleIcon,
    AndroidArrowDropdownIcon,
    AndroidArrowDropleftCircleIcon,
    AndroidArrowDropleftIcon,
    AndroidArrowDroprightCircleIcon,
    AndroidArrowDroprightIcon,
    AndroidArrowDropupCircleIcon,
    AndroidArrowDropupIcon,
    AndroidArrowForwardIcon,
    AndroidArrowUpIcon,
    AndroidAttachIcon,
    AndroidBarIcon,
    AndroidBicycleIcon,
    AndroidBoatIcon,
    AndroidBookmarkIcon,
    AndroidBulbIcon,
    AndroidBusIcon,
    AndroidCalendarIcon,
    AndroidCameraIcon,
    AndroidCallIcon,
    AndroidCancelIcon,
    AndroidChatIcon,
    AndroidCartIcon,
    AndroidCarIcon,
    AndroidCheckboxBlankIcon,
    AndroidCheckboxOutlineBlankIcon,
    AndroidCheckboxOutlineIcon,
    AndroidCheckboxIcon,
    AndroidCheckmarkCircleIcon,
    AndroidClipboardIcon,
    AndroidCloseIcon,
    AndroidCloudCircleIcon,
    AndroidCloudDoneIcon,
    AndroidCloudOutlineIcon,
    AndroidCloudIcon,
    AndroidColorPaletteIcon,
    AndroidCompassIcon,
    AndroidContactIcon,
    AndroidContactsIcon,
    AndroidContractIcon,
    AndroidCreateIcon,
    AndroidDesktopIcon,
    AndroidDocumentIcon,
    AndroidDeleteIcon,
    AndroidDoneIcon,
    AndroidDownloadIcon,
    AndroidDoneAllIcon,
    AndroidDraftsIcon,
    AndroidFavoriteOutlineIcon,
    AndroidExpandIcon,
    AndroidExitIcon,
    AndroidFavoriteIcon,
    AndroidFilmIcon,
    AndroidFolderOpenIcon,
    AndroidFolderIcon,
    AndroidFunnelIcon,
    AndroidGlobeIcon,
    AndroidHandIcon,
    AndroidHangoutIcon,
    AndroidHappyIcon,
    AndroidHomeIcon,
    AndroidImageIcon,
    AndroidLaptopIcon,
    AndroidListIcon,
    AndroidLocateIcon,
    AndroidLockIcon,
    AndroidMailIcon,
    AndroidMapIcon,
    AndroidMenuIcon,
    AndroidMicrophoneOffIcon,
    AndroidMoreHorizontalIcon,
    AndroidNavigateIcon,
    AndroidMicrophoneIcon,
    AndroidMoreVerticalIcon,
    AndroidNotificationsIcon,
    AndroidNotificationsOffIcon,
    AndroidNotificationsNoneIcon,
    AndroidOpenIcon,
    AndroidPersonAddIcon,
    AndroidOptionsIcon,
    AndroidPeopleIcon,
    AndroidPersonIcon,
    AndroidPhonePortraitIcon,
    AndroidPlaneIcon,
    AndroidPinIcon,
    AndroidPhoneLandscapeIcon,
    AndroidPrintIcon,
    AndroidPlaystoreIcon,
    AndroidRadioButtonOffIcon,
    AndroidRadioButtonOnIcon,
    AndroidRefreshIcon,
    AndroidRemoveCircleIcon,
    AndroidRemoveIcon,
    AndroidSadIcon,
    AndroidSearchIcon,
    AndroidSendIcon,
    AndroidRestaurantIcon,
    AndroidShareAltIcon,
    AndroidSettingsIcon,
    AndroidShareIcon,
    AndroidStarHalfIcon,
    AndroidStarOutlineIcon,
    AndroidSubwayIcon,
    AndroidStarIcon,
    AndroidStopwatchIcon,
    AndroidSunnyIcon,
    AndroidSyncIcon,
    AndroidTextsmsIcon,
    AndroidUploadIcon,
    AndroidTimeIcon,
    AndroidVolumeMuteIcon,
    AndroidTrainIcon,
    AndroidVolumeUpIcon,
    AndroidUnlockIcon,
    AndroidVolumeDownIcon,
    AndroidVolumeOffIcon,
    AndroidWatchIcon,
    AndroidWalkIcon,
    AndroidWifiIcon,
    AndroidWarningIcon,
    ArchiveIcon,
    ApertureIcon,
    ArrowDownBIcon,
    ArrowExpandIcon,
    ArrowDownAIcon,
    ArrowDownCIcon,
    ArrowGraphDownRightIcon,
    ArrowGraphDownLeftIcon,
    ArrowGraphUpLeftIcon,
    ArrowGraphUpRightIcon,
    ArrowLeftAIcon,
    ArrowMoveIcon,
    ArrowLeftCIcon,
    ArrowLeftBIcon,
    ArrowResizeIcon,
    ArrowReturnLeftIcon,
    ArrowRightAIcon,
    ArrowReturnRightIcon,
    ArrowRightBIcon,
    ArrowRightCIcon,
    ArrowShrinkIcon,
    ArrowSwapIcon,
    ArrowUpAIcon,
    ArrowUpBIcon,
    ArrowUpCIcon,
    BackspaceOutlineIcon,
    AsteriskIcon,
    AtIcon,
    BagIcon,
    BackspaceIcon,
    BatteryEmptyIcon,
    BatteryChargingIcon,
    BatteryFullIcon,
    BatteryLowIcon,
    BatteryHalfIcon,
    BeakerIcon,
    BeerIcon,
    BonfireIcon,
    BluetoothIcon,
    BookmarkIcon,
    BowtieIcon,
    BriefcaseIcon,
    BugIcon,
    CalculatorIcon,
    CameraIcon,
    CashIcon,
    CardIcon,
    CalendarIcon,
    ChatboxWorkingIcon,
    ChatboxesIcon,
    ChatboxIcon,
    ChatbubbleWorkingIcon,
    ChatbubbleIcon,
    ChatbubblesIcon,
    CheckmarkCircledIcon,
    CheckmarkIcon,
    CheckmarkRoundIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    ClipboardIcon,
    ClockIcon,
    CloseCircledIcon,
    CloseRoundIcon,
    CloseIcon,
    ClosedCaptioningIcon,
    CloudIcon,
    CodeDownloadIcon,
    CodeWorkingIcon,
    CodeIcon,
    CoffeeIcon,
    CompassIcon,
    ConnectionBarsIcon,
    ComposeIcon,
    ContrastIcon,
    CropIcon,
    CubeIcon,
    DiscIcon,
    DocumentTextIcon,
    EarthIcon,
    EaselIcon,
    DocumentIcon,
    EggIcon,
    EditIcon,
    DragIcon,
    EjectIcon,
    EmailUnreadIcon,
    EmailIcon,
    ErlenmeyerFlaskBubblesIcon,
    ErlenmeyerFlaskIcon,
    EyeIcon,
    FemaleIcon,
    EyeDisabledIcon,
    FilingIcon,
    FilmMarkerIcon,
    FireballIcon,
    FlagIcon,
    FlashOffIcon,
    FlameIcon,
    FolderIcon,
    FlashIcon,
    ForkIcon,
    ForkRepoIcon,
    FunnelIcon,
    ForwardIcon,
    GearAIcon,
    GearBIcon,
    HammerIcon,
    HappyOutlineIcon,
    GridIcon,
    HeadphoneIcon,
    HappyIcon,
    HeartBrokenIcon,
    HeartIcon,
    HelpBuoyIcon,
    HelpCircledIcon,
    HelpIcon,
    HomeIcon,
    IcecreamIcon,
    ImageIcon,
    ImagesIcon,
    InformationIcon,
    IonicIcon,
    InformationCircledIcon,
    IosAlarmIcon,
    IosAlbumsOutlineIcon,
    IosAlbumsIcon,
    IosAlarmOutlineIcon,
    IosAmericanfootballOutlineIcon,
    IosAmericanfootballIcon,
    IosAnalyticsOutlineIcon,
    IosAnalyticsIcon,
    IosArrowBackIcon,
    IosArrowDownIcon,
    IosArrowForwardIcon,
    IosArrowLeftIcon,
    IosArrowThinDownIcon,
    IosArrowThinLeftIcon,
    IosArrowRightIcon,
    IosArrowThinRightIcon,
    IosArrowThinUpIcon,
    IosArrowUpIcon,
    IosAtOutlineIcon,
    IosAtIcon,
    IosBarcodeOutlineIcon,
    IosBarcodeIcon,
    IosBaseballOutlineIcon,
    IosBaseballIcon,
    IosBasketballOutlineIcon,
    IosBasketballIcon,
    IosBellOutlineIcon,
    IosBellIcon,
    IosBodyOutlineIcon,
    IosBodyIcon,
    IosBoltOutlineIcon,
    IosBoltIcon,
    IosBookOutlineIcon,
    IosBookIcon,
    IosBookmarksOutlineIcon,
    IosBookmarksIcon,
    IosBoxIcon,
    IosBoxOutlineIcon,
    IosBriefcaseOutlineIcon,
    IosBriefcaseIcon,
    IosBrowsersIcon,
    IosBrowsersOutlineIcon,
    IosCalculatorOutlineIcon,
    IosCalculatorIcon,
    IosCalendarIcon,
    IosCameraOutlineIcon,
    IosCameraIcon,
    IosCartIcon,
    IosCalendarOutlineIcon,
    IosChatboxesOutlineIcon,
    IosChatbubbleOutlineIcon,
    IosChatbubbleIcon,
    IosCartOutlineIcon,
    IosCheckmarkEmptyIcon,
    IosChatboxesIcon,
    IosCheckmarkOutlineIcon,
    IosCheckmarkIcon,
    IosCircleFilledIcon,
    IosCircleOutlineIcon,
    IosClockOutlineIcon,
    IosClockIcon,
    IosCloseOutlineIcon,
    IosCloseEmptyIcon,
    IosCloseIcon,
    IosCloudDownloadOutlineIcon,
    IosCloudDownloadIcon,
    IosCloudOutlineIcon,
    IosCloudUploadOutlineIcon,
    IosCloudIcon,
    IosCloudUploadIcon,
    IosCloudyNightOutlineIcon,
    IosCloudyNightIcon,
    IosCloudyOutlineIcon,
    IosCloudyIcon,
    IosCogOutlineIcon,
    IosCogIcon,
    IosColorFilterIcon,
    IosColorFilterOutlineIcon,
    IosColorWandOutlineIcon,
    IosComposeIcon,
    IosComposeOutlineIcon,
    IosContactOutlineIcon,
    IosColorWandIcon,
    IosContactIcon,
    IosCopyOutlineIcon,
    IosCopyIcon,
    IosCropStrongIcon,
    IosCropIcon,
    IosDragIcon,
    IosDownloadOutlineIcon,
    IosDownloadIcon,
    IosEmailOutlineIcon,
    IosEyeOutlineIcon,
    IosEyeIcon,
    IosFastforwardOutlineIcon,
    IosEmailIcon,
    IosFastforwardIcon,
    IosFilingOutlineIcon,
    IosFilingIcon,
    IosFilmOutlineIcon,
    IosFilmIcon,
    IosFlagOutlineIcon,
    IosFlagIcon,
    IosFlameOutlineIcon,
    IosFlameIcon,
    IosFlaskOutlineIcon,
    IosFlaskIcon,
    IosFlowerIcon,
    IosFolderOutlineIcon,
    IosFolderIcon,
    IosFootballOutlineIcon,
    IosFootballIcon,
    IosGameControllerAOutlineIcon,
    IosFlowerOutlineIcon,
    IosGameControllerAIcon,
    IosGameControllerBOutlineIcon,
    IosGameControllerBIcon,
    IosGearOutlineIcon,
    IosGearIcon,
    IosGlassesIcon,
    IosGlassesOutlineIcon,
    IosGridViewOutlineIcon,
    IosGridViewIcon,
    IosHelpEmptyIcon,
    IosHeartIcon,
    IosHeartOutlineIcon,
    IosHelpOutlineIcon,
    IosHelpIcon,
    IosHomeOutlineIcon,
    IosHomeIcon,
    IosInfiniteOutlineIcon,
    IosInformationOutlineIcon,
    IosInformationEmptyIcon,
    IosInformationIcon,
    IosInfiniteIcon,
    IosIonicOutlineIcon,
    IosKeypadOutlineIcon,
    IosKeypadIcon,
    IosLightbulbOutlineIcon,
    IosLightbulbIcon,
    IosListOutlineIcon,
    IosListIcon,
    IosLocationOutlineIcon,
    IosLocationIcon,
    IosLockedOutlineIcon,
    IosLockedIcon,
    IosLoopStrongIcon,
    IosLoopIcon,
    IosMedicalOutlineIcon,
    IosMedicalIcon,
    IosMedkitOutlineIcon,
    IosMicOutlineIcon,
    IosMicOffIcon,
    IosMicIcon,
    IosMinusEmptyIcon,
    IosMedkitIcon,
    IosMinusOutlineIcon,
    IosMinusIcon,
    IosMonitorOutlineIcon,
    IosMonitorIcon,
    IosMoonOutlineIcon,
    IosMoreOutlineIcon,
    IosMoonIcon,
    IosMoreIcon,
    IosMusicalNoteIcon,
    IosNavigateOutlineIcon,
    IosMusicalNotesIcon,
    IosNavigateIcon,
    IosNutritionOutlineIcon,
    IosPaperOutlineIcon,
    IosPaperIcon,
    IosNutritionIcon,
    IosPaperplaneOutlineIcon,
    IosPaperplaneIcon,
    IosPartlysunnyOutlineIcon,
    IosPartlysunnyIcon,
    IosPauseOutlineIcon,
    IosPawOutlineIcon,
    IosPauseIcon,
    IosPeopleOutlineIcon,
    IosPeopleIcon,
    IosPersonOutlineIcon,
    IosPersonIcon,
    IosPawIcon,
    IosPersonaddOutlineIcon,
    IosPersonaddIcon,
    IosPhotosOutlineIcon,
    IosPhotosIcon,
    IosPieOutlineIcon,
    IosPieIcon,
    IosPintOutlineIcon,
    IosPintIcon,
    IosPlayOutlineIcon,
    IosPlayIcon,
    IosPlusEmptyIcon,
    IosPlusOutlineIcon,
    IosPlusIcon,
    IosPricetagOutlineIcon,
    IosPricetagIcon,
    IosPricetagsOutlineIcon,
    IosPricetagsIcon,
    IosPrinterIcon,
    IosPulseStrongIcon,
    IosPrinterOutlineIcon,
    IosPulseIcon,
    IosRainyOutlineIcon,
    IosRainyIcon,
    IosRecordingOutlineIcon,
    IosRecordingIcon,
    IosRedoOutlineIcon,
    IosRedoIcon,
    IosRefreshEmptyIcon,
    IosRefreshOutlineIcon,
    IosRefreshIcon,
    IosReloadIcon,
    IosReverseCameraOutlineIcon,
    IosReverseCameraIcon,
    IosRewindOutlineIcon,
    IosRewindIcon,
    IosRoseIcon,
    IosRoseOutlineIcon,
    IosSearchStrongIcon,
    IosSearchIcon,
    IosSettingsStrongIcon,
    IosSettingsIcon,
    IosShuffleStrongIcon,
    IosShuffleIcon,
    IosSkipbackwardOutlineIcon,
    IosSkipbackwardIcon,
    IosSkipforwardIcon,
    IosSkipforwardOutlineIcon,
    IosSnowyIcon,
    IosSpeedometerOutlineIcon,
    IosSpeedometerIcon,
    IosStarHalfIcon,
    IosStarOutlineIcon,
    IosStarIcon,
    IosStopwatchOutlineIcon,
    IosStopwatchIcon,
    IosSunnyOutlineIcon,
    IosSunnyIcon,
    IosTelephoneOutlineIcon,
    IosTelephoneIcon,
    IosTennisballOutlineIcon,
    IosTennisballIcon,
    IosThunderstormOutlineIcon,
    IosThunderstormIcon,
    IosTimeOutlineIcon,
    IosTimeIcon,
    IosTimerOutlineIcon,
    IosTimerIcon,
    IosToggleOutlineIcon,
    IosToggleIcon,
    IosTrashOutlineIcon,
    IosUndoIcon,
    IosTrashIcon,
    IosUnlockedOutlineIcon,
    IosUndoOutlineIcon,
    IosUnlockedIcon,
    IosUploadOutlineIcon,
    IosUploadIcon,
    IosVideocamIcon,
    IosVideocamOutlineIcon,
    IosVolumeLowIcon,
    IosVolumeHighIcon,
    IosWineglassOutlineIcon,
    IosWorldOutlineIcon,
    IosWorldIcon,
    IosWineglassIcon,
    IpodIcon,
    IphoneIcon,
    JetIcon,
    IpadIcon,
    KeyIcon,
    KnifeIcon,
    LightbulbIcon,
    LevelsIcon,
    LaptopIcon,
    LeafIcon,
    LoadAIcon,
    LoadCIcon,
    LoadBIcon,
    LocationIcon,
    LockCombinationIcon,
    LoadDIcon,
    LinkIcon,
    LockedIcon,
    LoopIcon,
    LogInIcon,
    LogOutIcon,
    MaleIcon,
    MagnetIcon,
    ManIcon,
    MapIcon,
    MedkitIcon,
    MergeIcon,
    MicAIcon,
    MicBIcon,
    MicCIcon,
    MinusCircledIcon,
    MinusRoundIcon,
    ModelSIcon,
    MinusIcon,
    MouseIcon,
    MoreIcon,
    MusicNoteIcon,
    NaviconRoundIcon,
    NavigateIcon,
    MonitorIcon,
    NaviconIcon,
    NoSmokingIcon,
    NetworkIcon,
    NuclearIcon,
    OutletIcon,
    PaintbrushIcon,
    PaintbucketIcon,
    PaperclipIcon,
    PaperAirplaneIcon,
    PauseIcon,
    PersonStalkerIcon,
    PersonIcon,
    PersonAddIcon,
    PinIcon,
    PieGraphIcon,
    PinpointIcon,
    PizzaIcon,
    PlaneIcon,
    PlayIcon,
    PlaystationIcon,
    PlusRoundIcon,
    PlanetIcon,
    PlusCircledIcon,
    PlusIcon,
    PodiumIcon,
    PowerIcon,
    PoundIcon,
    PricetagIcon,
    PullRequestIcon,
    PrinterIcon,
    QrScannerIcon,
    PricetagsIcon,
    RadioWavesIcon,
    QuoteIcon,
    RecordIcon,
    ReplyAllIcon,
    ReplyIcon,
    RefreshIcon,
    RibbonAIcon,
    SadOutlineIcon,
    RibbonBIcon,
    ScissorsIcon,
    SearchIcon,
    SadIcon,
    SettingsIcon,
    ShareIcon,
    ShuffleIcon,
    SkipForwardIcon,
    SkipBackwardIcon,
    SocialAndroidOutlineIcon,
    SocialAngularOutlineIcon,
    SocialAndroidIcon,
    SocialAngularIcon,
    SocialAppleIcon,
    SocialBitcoinOutlineIcon,
    SocialAppleOutlineIcon,
    SocialBitcoinIcon,
    SocialBufferOutlineIcon,
    SocialBufferIcon,
    SocialChromeOutlineIcon,
    SocialChromeIcon,
    SocialCodepenOutlineIcon,
    SocialCodepenIcon,
    SocialCss3OutlineIcon,
    SocialCss3Icon,
    SocialDesignernewsOutlineIcon,
    SocialDribbbleOutlineIcon,
    SocialDribbbleIcon,
    SocialDesignernewsIcon,
    SocialDropboxOutlineIcon,
    SocialDropboxIcon,
    SocialEuroOutlineIcon,
    SocialEuroIcon,
    SocialFacebookOutlineIcon,
    SocialFacebookIcon,
    SocialFoursquareOutlineIcon,
    SocialFoursquareIcon,
    SocialFreebsdDevilIcon,
    SocialGithubOutlineIcon,
    SocialGithubIcon,
    SocialGoogleOutlineIcon,
    SocialGoogleIcon,
    SocialGoogleplusOutlineIcon,
    SocialGoogleplusIcon,
    SocialHackernewsOutlineIcon,
    SocialHackernewsIcon,
    SocialHtml5OutlineIcon,
    SocialHtml5Icon,
    SocialInstagramOutlineIcon,
    SocialInstagramIcon,
    SocialJavascriptOutlineIcon,
    SocialJavascriptIcon,
    SocialLinkedinOutlineIcon,
    SocialLinkedinIcon,
    SocialMarkdownIcon,
    SocialNodejsIcon,
    SocialOctocatIcon,
    SocialPinterestIcon,
    SocialPinterestOutlineIcon,
    SocialPythonIcon,
    SocialRedditOutlineIcon,
    SocialRedditIcon,
    SocialRssIcon,
    SocialRssOutlineIcon,
    SocialSassIcon,
    SocialSkypeOutlineIcon,
    SocialSkypeIcon,
    SocialSnapchatOutlineIcon,
    SocialSnapchatIcon,
    SocialTumblrOutlineIcon,
    SocialTumblrIcon,
    SocialTwitchOutlineIcon,
    SocialTuxIcon,
    SocialTwitchIcon,
    SocialTwitterOutlineIcon,
    SocialUsdOutlineIcon,
    SocialUsdIcon,
    SocialTwitterIcon,
    SocialVimeoOutlineIcon,
    SocialVimeoIcon,
    SocialWhatsappOutlineIcon,
    SocialWhatsappIcon,
    SocialWindowsOutlineIcon,
    SocialWindowsIcon,
    SocialWordpressOutlineIcon,
    SocialWordpressIcon,
    SocialYahooOutlineIcon,
    SocialYahooIcon,
    SocialYenOutlineIcon,
    SocialYenIcon,
    SocialYoutubeOutlineIcon,
    SoupCanOutlineIcon,
    SocialYoutubeIcon,
    SoupCanIcon,
    SpeakerphoneIcon,
    SpeedometerIcon,
    StarIcon,
    StatsBarsIcon,
    SteamIcon,
    SpoonIcon,
    StopIcon,
    ThermometerIcon,
    ThumbsdownIcon,
    ThumbsupIcon,
    ToggleIcon,
    ToggleFilledIcon,
    TransgenderIcon,
    TrashAIcon,
    TrashBIcon,
    TrophyIcon,
    TshirtOutlineIcon,
    UmbrellaIcon,
    TshirtIcon,
    UploadIcon,
    UniversityIcon,
    UnlockedIcon,
    UsbIcon,
    VolumeLowIcon,
    VolumeHighIcon,
    VideocameraIcon,
    VolumeMediumIcon,
    WaterdropIcon,
    WandIcon,
    WifiIcon,
    VolumeMuteIcon,
    WineglassIcon,
    WrenchIcon,
    XboxIcon,
    WomanIcon,
  },
  data () {
    return {
      title: 'Vue-Ionicons',
      subtitle: 'Vue Icon Set Components from Ionic Team',
      w: '30px',
      h: '30px',
      searchText: '',
      icons: [
        {
          name: 'alert-circled-icon',
          readableName: 'Alert Circled',
          libraryName: 'AlertCircledIcon'
        },
        {
          name: 'alert-icon',
          readableName: 'Alert',
          libraryName: 'AlertIcon'
        },
        {
          name: 'android-add-circle-icon',
          readableName: 'Android Add Circle',
          libraryName: 'AndroidAddCircleIcon'
        },
        {
          name: 'android-add-icon',
          readableName: 'Android Add',
          libraryName: 'AndroidAddIcon'
        },
        {
          name: 'android-alarm-clock-icon',
          readableName: 'Android Alarm Clock',
          libraryName: 'AndroidAlarmClockIcon'
        },
        {
          name: 'android-apps-icon',
          readableName: 'Android Apps',
          libraryName: 'AndroidAppsIcon'
        },
        {
          name: 'android-alert-icon',
          readableName: 'Android Alert',
          libraryName: 'AndroidAlertIcon'
        },
        {
          name: 'android-archive-icon',
          readableName: 'Android Archive',
          libraryName: 'AndroidArchiveIcon'
        },
        {
          name: 'android-arrow-back-icon',
          readableName: 'Android Arrow Back',
          libraryName: 'AndroidArrowBackIcon'
        },
        {
          name: 'android-arrow-down-icon',
          readableName: 'Android Arrow Down',
          libraryName: 'AndroidArrowDownIcon'
        },
        {
          name: 'android-arrow-dropdown-circle-icon',
          readableName: 'Android Arrow Dropdown Circle',
          libraryName: 'AndroidArrowDropdownCircleIcon'
        },
        {
          name: 'android-arrow-dropdown-icon',
          readableName: 'Android Arrow Dropdown',
          libraryName: 'AndroidArrowDropdownIcon'
        },
        {
          name: 'android-arrow-dropleft-circle-icon',
          readableName: 'Android Arrow Dropleft Circle',
          libraryName: 'AndroidArrowDropleftCircleIcon'
        },
        {
          name: 'android-arrow-dropleft-icon',
          readableName: 'Android Arrow Dropleft',
          libraryName: 'AndroidArrowDropleftIcon'
        },
        {
          name: 'android-arrow-dropright-circle-icon',
          readableName: 'Android Arrow Dropright Circle',
          libraryName: 'AndroidArrowDroprightCircleIcon'
        },
        {
          name: 'android-arrow-dropright-icon',
          readableName: 'Android Arrow Dropright',
          libraryName: 'AndroidArrowDroprightIcon'
        },
        {
          name: 'android-arrow-dropup-circle-icon',
          readableName: 'Android Arrow Dropup Circle',
          libraryName: 'AndroidArrowDropupCircleIcon'
        },
        {
          name: 'android-arrow-dropup-icon',
          readableName: 'Android Arrow Dropup',
          libraryName: 'AndroidArrowDropupIcon'
        },
        {
          name: 'android-arrow-forward-icon',
          readableName: 'Android Arrow Forward',
          libraryName: 'AndroidArrowForwardIcon'
        },
        {
          name: 'android-arrow-up-icon',
          readableName: 'Android Arrow Up',
          libraryName: 'AndroidArrowUpIcon'
        },
        {
          name: 'android-attach-icon',
          readableName: 'Android Attach',
          libraryName: 'AndroidAttachIcon'
        },
        {
          name: 'android-bar-icon',
          readableName: 'Android Bar',
          libraryName: 'AndroidBarIcon'
        },
        {
          name: 'android-bicycle-icon',
          readableName: 'Android Bicycle',
          libraryName: 'AndroidBicycleIcon'
        },
        {
          name: 'android-boat-icon',
          readableName: 'Android Boat',
          libraryName: 'AndroidBoatIcon'
        },
        {
          name: 'android-bookmark-icon',
          readableName: 'Android Bookmark',
          libraryName: 'AndroidBookmarkIcon'
        },
        {
          name: 'android-bulb-icon',
          readableName: 'Android Bulb',
          libraryName: 'AndroidBulbIcon'
        },
        {
          name: 'android-bus-icon',
          readableName: 'Android Bus',
          libraryName: 'AndroidBusIcon'
        },
        {
          name: 'android-calendar-icon',
          readableName: 'Android Calendar',
          libraryName: 'AndroidCalendarIcon'
        },
        {
          name: 'android-camera-icon',
          readableName: 'Android Camera',
          libraryName: 'AndroidCameraIcon'
        },
        {
          name: 'android-call-icon',
          readableName: 'Android Call',
          libraryName: 'AndroidCallIcon'
        },
        {
          name: 'android-cancel-icon',
          readableName: 'Android Cancel',
          libraryName: 'AndroidCancelIcon'
        },
        {
          name: 'android-chat-icon',
          readableName: 'Android Chat',
          libraryName: 'AndroidChatIcon'
        },
        {
          name: 'android-cart-icon',
          readableName: 'Android Cart',
          libraryName: 'AndroidCartIcon'
        },
        {
          name: 'android-car-icon',
          readableName: 'Android Car',
          libraryName: 'AndroidCarIcon'
        },
        {
          name: 'android-checkbox-blank-icon',
          readableName: 'Android Checkbox Blank',
          libraryName: 'AndroidCheckboxBlankIcon'
        },
        {
          name: 'android-checkbox-outline-blank-icon',
          readableName: 'Android Checkbox Outline Blank',
          libraryName: 'AndroidCheckboxOutlineBlankIcon'
        },
        {
          name: 'android-checkbox-outline-icon',
          readableName: 'Android Checkbox Outline',
          libraryName: 'AndroidCheckboxOutlineIcon'
        },
        {
          name: 'android-checkbox-icon',
          readableName: 'Android Checkbox',
          libraryName: 'AndroidCheckboxIcon'
        },
        {
          name: 'android-checkmark-circle-icon',
          readableName: 'Android Checkmark Circle',
          libraryName: 'AndroidCheckmarkCircleIcon'
        },
        {
          name: 'android-clipboard-icon',
          readableName: 'Android Clipboard',
          libraryName: 'AndroidClipboardIcon'
        },
        {
          name: 'android-close-icon',
          readableName: 'Android Close',
          libraryName: 'AndroidCloseIcon'
        },
        {
          name: 'android-cloud-circle-icon',
          readableName: 'Android Cloud Circle',
          libraryName: 'AndroidCloudCircleIcon'
        },
        {
          name: 'android-cloud-done-icon',
          readableName: 'Android Cloud Done',
          libraryName: 'AndroidCloudDoneIcon'
        },
        {
          name: 'android-cloud-outline-icon',
          readableName: 'Android Cloud Outline',
          libraryName: 'AndroidCloudOutlineIcon'
        },
        {
          name: 'android-cloud-icon',
          readableName: 'Android Cloud',
          libraryName: 'AndroidCloudIcon'
        },
        {
          name: 'android-color-palette-icon',
          readableName: 'Android Color Palette',
          libraryName: 'AndroidColorPaletteIcon'
        },
        {
          name: 'android-compass-icon',
          readableName: 'Android Compass',
          libraryName: 'AndroidCompassIcon'
        },
        {
          name: 'android-contact-icon',
          readableName: 'Android Contact',
          libraryName: 'AndroidContactIcon'
        },
        {
          name: 'android-contacts-icon',
          readableName: 'Android Contacts',
          libraryName: 'AndroidContactsIcon'
        },
        {
          name: 'android-contract-icon',
          readableName: 'Android Contract',
          libraryName: 'AndroidContractIcon'
        },
        {
          name: 'android-create-icon',
          readableName: 'Android Create',
          libraryName: 'AndroidCreateIcon'
        },
        {
          name: 'android-desktop-icon',
          readableName: 'Android Desktop',
          libraryName: 'AndroidDesktopIcon'
        },
        {
          name: 'android-document-icon',
          readableName: 'Android Document',
          libraryName: 'AndroidDocumentIcon'
        },
        {
          name: 'android-delete-icon',
          readableName: 'Android Delete',
          libraryName: 'AndroidDeleteIcon'
        },
        {
          name: 'android-done-icon',
          readableName: 'Android Done',
          libraryName: 'AndroidDoneIcon'
        },
        {
          name: 'android-download-icon',
          readableName: 'Android Download',
          libraryName: 'AndroidDownloadIcon'
        },
        {
          name: 'android-done-all-icon',
          readableName: 'Android Done All',
          libraryName: 'AndroidDoneAllIcon'
        },
        {
          name: 'android-drafts-icon',
          readableName: 'Android Drafts',
          libraryName: 'AndroidDraftsIcon'
        },
        {
          name: 'android-favorite-outline-icon',
          readableName: 'Android Favorite Outline',
          libraryName: 'AndroidFavoriteOutlineIcon'
        },
        {
          name: 'android-expand-icon',
          readableName: 'Android Expand',
          libraryName: 'AndroidExpandIcon'
        },
        {
          name: 'android-exit-icon',
          readableName: 'Android Exit',
          libraryName: 'AndroidExitIcon'
        },
        {
          name: 'android-favorite-icon',
          readableName: 'Android Favorite',
          libraryName: 'AndroidFavoriteIcon'
        },
        {
          name: 'android-film-icon',
          readableName: 'Android Film',
          libraryName: 'AndroidFilmIcon'
        },
        {
          name: 'android-folder-open-icon',
          readableName: 'Android Folder Open',
          libraryName: 'AndroidFolderOpenIcon'
        },
        {
          name: 'android-folder-icon',
          readableName: 'Android Folder',
          libraryName: 'AndroidFolderIcon'
        },
        {
          name: 'android-funnel-icon',
          readableName: 'Android Funnel',
          libraryName: 'AndroidFunnelIcon'
        },
        {
          name: 'android-globe-icon',
          readableName: 'Android Globe',
          libraryName: 'AndroidGlobeIcon'
        },
        {
          name: 'android-hand-icon',
          readableName: 'Android Hand',
          libraryName: 'AndroidHandIcon'
        },
        {
          name: 'android-hangout-icon',
          readableName: 'Android Hangout',
          libraryName: 'AndroidHangoutIcon'
        },
        {
          name: 'android-happy-icon',
          readableName: 'Android Happy',
          libraryName: 'AndroidHappyIcon'
        },
        {
          name: 'android-home-icon',
          readableName: 'Android Home',
          libraryName: 'AndroidHomeIcon'
        },
        {
          name: 'android-image-icon',
          readableName: 'Android Image',
          libraryName: 'AndroidImageIcon'
        },
        {
          name: 'android-laptop-icon',
          readableName: 'Android Laptop',
          libraryName: 'AndroidLaptopIcon'
        },
        {
          name: 'android-list-icon',
          readableName: 'Android List',
          libraryName: 'AndroidListIcon'
        },
        {
          name: 'android-locate-icon',
          readableName: 'Android Locate',
          libraryName: 'AndroidLocateIcon'
        },
        {
          name: 'android-lock-icon',
          readableName: 'Android Lock',
          libraryName: 'AndroidLockIcon'
        },
        {
          name: 'android-mail-icon',
          readableName: 'Android Mail',
          libraryName: 'AndroidMailIcon'
        },
        {
          name: 'android-map-icon',
          readableName: 'Android Map',
          libraryName: 'AndroidMapIcon'
        },
        {
          name: 'android-menu-icon',
          readableName: 'Android Menu',
          libraryName: 'AndroidMenuIcon'
        },
        {
          name: 'android-microphone-off-icon',
          readableName: 'Android Microphone Off',
          libraryName: 'AndroidMicrophoneOffIcon'
        },
        {
          name: 'android-more-horizontal-icon',
          readableName: 'Android More Horizontal',
          libraryName: 'AndroidMoreHorizontalIcon'
        },
        {
          name: 'android-navigate-icon',
          readableName: 'Android Navigate',
          libraryName: 'AndroidNavigateIcon'
        },
        {
          name: 'android-microphone-icon',
          readableName: 'Android Microphone',
          libraryName: 'AndroidMicrophoneIcon'
        },
        {
          name: 'android-more-vertical-icon',
          readableName: 'Android More Vertical',
          libraryName: 'AndroidMoreVerticalIcon'
        },
        {
          name: 'android-notifications-icon',
          readableName: 'Android Notifications',
          libraryName: 'AndroidNotificationsIcon'
        },
        {
          name: 'android-notifications-off-icon',
          readableName: 'Android Notifications Off',
          libraryName: 'AndroidNotificationsOffIcon'
        },
        {
          name: 'android-notifications-none-icon',
          readableName: 'Android Notifications None',
          libraryName: 'AndroidNotificationsNoneIcon'
        },
        {
          name: 'android-open-icon',
          readableName: 'Android Open',
          libraryName: 'AndroidOpenIcon'
        },
        {
          name: 'android-person-add-icon',
          readableName: 'Android Person Add',
          libraryName: 'AndroidPersonAddIcon'
        },
        {
          name: 'android-options-icon',
          readableName: 'Android Options',
          libraryName: 'AndroidOptionsIcon'
        },
        {
          name: 'android-people-icon',
          readableName: 'Android People',
          libraryName: 'AndroidPeopleIcon'
        },
        {
          name: 'android-person-icon',
          readableName: 'Android Person',
          libraryName: 'AndroidPersonIcon'
        },
        {
          name: 'android-phone-portrait-icon',
          readableName: 'Android Phone Portrait',
          libraryName: 'AndroidPhonePortraitIcon'
        },
        {
          name: 'android-plane-icon',
          readableName: 'Android Plane',
          libraryName: 'AndroidPlaneIcon'
        },
        {
          name: 'android-pin-icon',
          readableName: 'Android Pin',
          libraryName: 'AndroidPinIcon'
        },
        {
          name: 'android-phone-landscape-icon',
          readableName: 'Android Phone Landscape',
          libraryName: 'AndroidPhoneLandscapeIcon'
        },
        {
          name: 'android-print-icon',
          readableName: 'Android Print',
          libraryName: 'AndroidPrintIcon'
        },
        {
          name: 'android-playstore-icon',
          readableName: 'Android Playstore',
          libraryName: 'AndroidPlaystoreIcon'
        },
        {
          name: 'android-radio-button-off-icon',
          readableName: 'Android Radio Button Off',
          libraryName: 'AndroidRadioButtonOffIcon'
        },
        {
          name: 'android-radio-button-on-icon',
          readableName: 'Android Radio Button On',
          libraryName: 'AndroidRadioButtonOnIcon'
        },
        {
          name: 'android-refresh-icon',
          readableName: 'Android Refresh',
          libraryName: 'AndroidRefreshIcon'
        },
        {
          name: 'android-remove-circle-icon',
          readableName: 'Android Remove Circle',
          libraryName: 'AndroidRemoveCircleIcon'
        },
        {
          name: 'android-remove-icon',
          readableName: 'Android Remove',
          libraryName: 'AndroidRemoveIcon'
        },
        {
          name: 'android-sad-icon',
          readableName: 'Android Sad',
          libraryName: 'AndroidSadIcon'
        },
        {
          name: 'android-search-icon',
          readableName: 'Android Search',
          libraryName: 'AndroidSearchIcon'
        },
        {
          name: 'android-send-icon',
          readableName: 'Android Send',
          libraryName: 'AndroidSendIcon'
        },
        {
          name: 'android-restaurant-icon',
          readableName: 'Android Restaurant',
          libraryName: 'AndroidRestaurantIcon'
        },
        {
          name: 'android-share-alt-icon',
          readableName: 'Android Share Alt',
          libraryName: 'AndroidShareAltIcon'
        },
        {
          name: 'android-settings-icon',
          readableName: 'Android Settings',
          libraryName: 'AndroidSettingsIcon'
        },
        {
          name: 'android-share-icon',
          readableName: 'Android Share',
          libraryName: 'AndroidShareIcon'
        },
        {
          name: 'android-star-half-icon',
          readableName: 'Android Star Half',
          libraryName: 'AndroidStarHalfIcon'
        },
        {
          name: 'android-star-outline-icon',
          readableName: 'Android Star Outline',
          libraryName: 'AndroidStarOutlineIcon'
        },
        {
          name: 'android-subway-icon',
          readableName: 'Android Subway',
          libraryName: 'AndroidSubwayIcon'
        },
        {
          name: 'android-star-icon',
          readableName: 'Android Star',
          libraryName: 'AndroidStarIcon'
        },
        {
          name: 'android-stopwatch-icon',
          readableName: 'Android Stopwatch',
          libraryName: 'AndroidStopwatchIcon'
        },
        {
          name: 'android-sunny-icon',
          readableName: 'Android Sunny',
          libraryName: 'AndroidSunnyIcon'
        },
        {
          name: 'android-sync-icon',
          readableName: 'Android Sync',
          libraryName: 'AndroidSyncIcon'
        },
        {
          name: 'android-textsms-icon',
          readableName: 'Android Textsms',
          libraryName: 'AndroidTextsmsIcon'
        },
        {
          name: 'android-upload-icon',
          readableName: 'Android Upload',
          libraryName: 'AndroidUploadIcon'
        },
        {
          name: 'android-time-icon',
          readableName: 'Android Time',
          libraryName: 'AndroidTimeIcon'
        },
        {
          name: 'android-volume-mute-icon',
          readableName: 'Android Volume Mute',
          libraryName: 'AndroidVolumeMuteIcon'
        },
        {
          name: 'android-train-icon',
          readableName: 'Android Train',
          libraryName: 'AndroidTrainIcon'
        },
        {
          name: 'android-volume-up-icon',
          readableName: 'Android Volume Up',
          libraryName: 'AndroidVolumeUpIcon'
        },
        {
          name: 'android-unlock-icon',
          readableName: 'Android Unlock',
          libraryName: 'AndroidUnlockIcon'
        },
        {
          name: 'android-volume-down-icon',
          readableName: 'Android Volume Down',
          libraryName: 'AndroidVolumeDownIcon'
        },
        {
          name: 'android-volume-off-icon',
          readableName: 'Android Volume Off',
          libraryName: 'AndroidVolumeOffIcon'
        },
        {
          name: 'android-watch-icon',
          readableName: 'Android Watch',
          libraryName: 'AndroidWatchIcon'
        },
        {
          name: 'android-walk-icon',
          readableName: 'Android Walk',
          libraryName: 'AndroidWalkIcon'
        },
        {
          name: 'android-wifi-icon',
          readableName: 'Android Wifi',
          libraryName: 'AndroidWifiIcon'
        },
        {
          name: 'android-warning-icon',
          readableName: 'Android Warning',
          libraryName: 'AndroidWarningIcon'
        },
        {
          name: 'archive-icon',
          readableName: 'Archive',
          libraryName: 'ArchiveIcon'
        },
        {
          name: 'aperture-icon',
          readableName: 'Aperture',
          libraryName: 'ApertureIcon'
        },
        {
          name: 'arrow-down-b-icon',
          readableName: 'Arrow Down B',
          libraryName: 'ArrowDownBIcon'
        },
        {
          name: 'arrow-expand-icon',
          readableName: 'Arrow Expand',
          libraryName: 'ArrowExpandIcon'
        },
        {
          name: 'arrow-down-a-icon',
          readableName: 'Arrow Down A',
          libraryName: 'ArrowDownAIcon'
        },
        {
          name: 'arrow-down-c-icon',
          readableName: 'Arrow Down C',
          libraryName: 'ArrowDownCIcon'
        },
        {
          name: 'arrow-graph-down-right-icon',
          readableName: 'Arrow Graph Down Right',
          libraryName: 'ArrowGraphDownRightIcon'
        },
        {
          name: 'arrow-graph-down-left-icon',
          readableName: 'Arrow Graph Down Left',
          libraryName: 'ArrowGraphDownLeftIcon'
        },
        {
          name: 'arrow-graph-up-left-icon',
          readableName: 'Arrow Graph Up Left',
          libraryName: 'ArrowGraphUpLeftIcon'
        },
        {
          name: 'arrow-graph-up-right-icon',
          readableName: 'Arrow Graph Up Right',
          libraryName: 'ArrowGraphUpRightIcon'
        },
        {
          name: 'arrow-left-a-icon',
          readableName: 'Arrow Left A',
          libraryName: 'ArrowLeftAIcon'
        },
        {
          name: 'arrow-move-icon',
          readableName: 'Arrow Move',
          libraryName: 'ArrowMoveIcon'
        },
        {
          name: 'arrow-left-c-icon',
          readableName: 'Arrow Left C',
          libraryName: 'ArrowLeftCIcon'
        },
        {
          name: 'arrow-left-b-icon',
          readableName: 'Arrow Left B',
          libraryName: 'ArrowLeftBIcon'
        },
        {
          name: 'arrow-resize-icon',
          readableName: 'Arrow Resize',
          libraryName: 'ArrowResizeIcon'
        },
        {
          name: 'arrow-return-left-icon',
          readableName: 'Arrow Return Left',
          libraryName: 'ArrowReturnLeftIcon'
        },
        {
          name: 'arrow-right-a-icon',
          readableName: 'Arrow Right A',
          libraryName: 'ArrowRightAIcon'
        },
        {
          name: 'arrow-return-right-icon',
          readableName: 'Arrow Return Right',
          libraryName: 'ArrowReturnRightIcon'
        },
        {
          name: 'arrow-right-b-icon',
          readableName: 'Arrow Right B',
          libraryName: 'ArrowRightBIcon'
        },
        {
          name: 'arrow-right-c-icon',
          readableName: 'Arrow Right C',
          libraryName: 'ArrowRightCIcon'
        },
        {
          name: 'arrow-shrink-icon',
          readableName: 'Arrow Shrink',
          libraryName: 'ArrowShrinkIcon'
        },
        {
          name: 'arrow-swap-icon',
          readableName: 'Arrow Swap',
          libraryName: 'ArrowSwapIcon'
        },
        {
          name: 'arrow-up-a-icon',
          readableName: 'Arrow Up A',
          libraryName: 'ArrowUpAIcon'
        },
        {
          name: 'arrow-up-b-icon',
          readableName: 'Arrow Up B',
          libraryName: 'ArrowUpBIcon'
        },
        {
          name: 'arrow-up-c-icon',
          readableName: 'Arrow Up C',
          libraryName: 'ArrowUpCIcon'
        },
        {
          name: 'backspace-outline-icon',
          readableName: 'Backspace Outline',
          libraryName: 'BackspaceOutlineIcon'
        },
        {
          name: 'asterisk-icon',
          readableName: 'Asterisk',
          libraryName: 'AsteriskIcon'
        },
        {
          name: 'at-icon',
          readableName: 'At',
          libraryName: 'AtIcon'
        },
        {
          name: 'bag-icon',
          readableName: 'Bag',
          libraryName: 'BagIcon'
        },
        {
          name: 'backspace-icon',
          readableName: 'Backspace',
          libraryName: 'BackspaceIcon'
        },
        {
          name: 'battery-empty-icon',
          readableName: 'Battery Empty',
          libraryName: 'BatteryEmptyIcon'
        },
        {
          name: 'battery-charging-icon',
          readableName: 'Battery Charging',
          libraryName: 'BatteryChargingIcon'
        },
        {
          name: 'battery-full-icon',
          readableName: 'Battery Full',
          libraryName: 'BatteryFullIcon'
        },
        {
          name: 'battery-low-icon',
          readableName: 'Battery Low',
          libraryName: 'BatteryLowIcon'
        },
        {
          name: 'battery-half-icon',
          readableName: 'Battery Half',
          libraryName: 'BatteryHalfIcon'
        },
        {
          name: 'beaker-icon',
          readableName: 'Beaker',
          libraryName: 'BeakerIcon'
        },
        {
          name: 'beer-icon',
          readableName: 'Beer',
          libraryName: 'BeerIcon'
        },
        {
          name: 'bonfire-icon',
          readableName: 'Bonfire',
          libraryName: 'BonfireIcon'
        },
        {
          name: 'bluetooth-icon',
          readableName: 'Bluetooth',
          libraryName: 'BluetoothIcon'
        },
        {
          name: 'bookmark-icon',
          readableName: 'Bookmark',
          libraryName: 'BookmarkIcon'
        },
        {
          name: 'bowtie-icon',
          readableName: 'Bowtie',
          libraryName: 'BowtieIcon'
        },
        {
          name: 'briefcase-icon',
          readableName: 'Briefcase',
          libraryName: 'BriefcaseIcon'
        },
        {
          name: 'bug-icon',
          readableName: 'Bug',
          libraryName: 'BugIcon'
        },
        {
          name: 'calculator-icon',
          readableName: 'Calculator',
          libraryName: 'CalculatorIcon'
        },
        {
          name: 'camera-icon',
          readableName: 'Camera',
          libraryName: 'CameraIcon'
        },
        {
          name: 'cash-icon',
          readableName: 'Cash',
          libraryName: 'CashIcon'
        },
        {
          name: 'card-icon',
          readableName: 'Card',
          libraryName: 'CardIcon'
        },
        {
          name: 'calendar-icon',
          readableName: 'Calendar',
          libraryName: 'CalendarIcon'
        },
        {
          name: 'chatbox-working-icon',
          readableName: 'Chatbox Working',
          libraryName: 'ChatboxWorkingIcon'
        },
        {
          name: 'chatboxes-icon',
          readableName: 'Chatboxes',
          libraryName: 'ChatboxesIcon'
        },
        {
          name: 'chatbox-icon',
          readableName: 'Chatbox',
          libraryName: 'ChatboxIcon'
        },
        {
          name: 'chatbubble-working-icon',
          readableName: 'Chatbubble Working',
          libraryName: 'ChatbubbleWorkingIcon'
        },
        {
          name: 'chatbubble-icon',
          readableName: 'Chatbubble',
          libraryName: 'ChatbubbleIcon'
        },
        {
          name: 'chatbubbles-icon',
          readableName: 'Chatbubbles',
          libraryName: 'ChatbubblesIcon'
        },
        {
          name: 'checkmark-circled-icon',
          readableName: 'Checkmark Circled',
          libraryName: 'CheckmarkCircledIcon'
        },
        {
          name: 'checkmark-icon',
          readableName: 'Checkmark',
          libraryName: 'CheckmarkIcon'
        },
        {
          name: 'checkmark-round-icon',
          readableName: 'Checkmark Round',
          libraryName: 'CheckmarkRoundIcon'
        },
        {
          name: 'chevron-left-icon',
          readableName: 'Chevron Left',
          libraryName: 'ChevronLeftIcon'
        },
        {
          name: 'chevron-right-icon',
          readableName: 'Chevron Right',
          libraryName: 'ChevronRightIcon'
        },
        {
          name: 'chevron-up-icon',
          readableName: 'Chevron Up',
          libraryName: 'ChevronUpIcon'
        },
        {
          name: 'chevron-down-icon',
          readableName: 'Chevron Down',
          libraryName: 'ChevronDownIcon'
        },
        {
          name: 'clipboard-icon',
          readableName: 'Clipboard',
          libraryName: 'ClipboardIcon'
        },
        {
          name: 'clock-icon',
          readableName: 'Clock',
          libraryName: 'ClockIcon'
        },
        {
          name: 'close-circled-icon',
          readableName: 'Close Circled',
          libraryName: 'CloseCircledIcon'
        },
        {
          name: 'close-round-icon',
          readableName: 'Close Round',
          libraryName: 'CloseRoundIcon'
        },
        {
          name: 'close-icon',
          readableName: 'Close',
          libraryName: 'CloseIcon'
        },
        {
          name: 'closed-captioning-icon',
          readableName: 'Closed Captioning',
          libraryName: 'ClosedCaptioningIcon'
        },
        {
          name: 'cloud-icon',
          readableName: 'Cloud',
          libraryName: 'CloudIcon'
        },
        {
          name: 'code-download-icon',
          readableName: 'Code Download',
          libraryName: 'CodeDownloadIcon'
        },
        {
          name: 'code-working-icon',
          readableName: 'Code Working',
          libraryName: 'CodeWorkingIcon'
        },
        {
          name: 'code-icon',
          readableName: 'Code',
          libraryName: 'CodeIcon'
        },
        {
          name: 'coffee-icon',
          readableName: 'Coffee',
          libraryName: 'CoffeeIcon'
        },
        {
          name: 'compass-icon',
          readableName: 'Compass',
          libraryName: 'CompassIcon'
        },
        {
          name: 'connection-bars-icon',
          readableName: 'Connection Bars',
          libraryName: 'ConnectionBarsIcon'
        },
        {
          name: 'compose-icon',
          readableName: 'Compose',
          libraryName: 'ComposeIcon'
        },
        {
          name: 'contrast-icon',
          readableName: 'Contrast',
          libraryName: 'ContrastIcon'
        },
        {
          name: 'crop-icon',
          readableName: 'Crop',
          libraryName: 'CropIcon'
        },
        {
          name: 'cube-icon',
          readableName: 'Cube',
          libraryName: 'CubeIcon'
        },
        {
          name: 'disc-icon',
          readableName: 'Disc',
          libraryName: 'DiscIcon'
        },
        {
          name: 'document-text-icon',
          readableName: 'Document Text',
          libraryName: 'DocumentTextIcon'
        },
        {
          name: 'earth-icon',
          readableName: 'Earth',
          libraryName: 'EarthIcon'
        },
        {
          name: 'easel-icon',
          readableName: 'Easel',
          libraryName: 'EaselIcon'
        },
        {
          name: 'document-icon',
          readableName: 'Document',
          libraryName: 'DocumentIcon'
        },
        {
          name: 'egg-icon',
          readableName: 'Egg',
          libraryName: 'EggIcon'
        },
        {
          name: 'edit-icon',
          readableName: 'Edit',
          libraryName: 'EditIcon'
        },
        {
          name: 'drag-icon',
          readableName: 'Drag',
          libraryName: 'DragIcon'
        },
        {
          name: 'eject-icon',
          readableName: 'Eject',
          libraryName: 'EjectIcon'
        },
        {
          name: 'email-unread-icon',
          readableName: 'Email Unread',
          libraryName: 'EmailUnreadIcon'
        },
        {
          name: 'email-icon',
          readableName: 'Email',
          libraryName: 'EmailIcon'
        },
        {
          name: 'erlenmeyer-flask-bubbles-icon',
          readableName: 'Erlenmeyer Flask Bubbles',
          libraryName: 'ErlenmeyerFlaskBubblesIcon'
        },
        {
          name: 'erlenmeyer-flask-icon',
          readableName: 'Erlenmeyer Flask',
          libraryName: 'ErlenmeyerFlaskIcon'
        },
        {
          name: 'eye-icon',
          readableName: 'Eye',
          libraryName: 'EyeIcon'
        },
        {
          name: 'female-icon',
          readableName: 'Female',
          libraryName: 'FemaleIcon'
        },
        {
          name: 'eye-disabled-icon',
          readableName: 'Eye Disabled',
          libraryName: 'EyeDisabledIcon'
        },
        {
          name: 'filing-icon',
          readableName: 'Filing',
          libraryName: 'FilingIcon'
        },
        {
          name: 'film-marker-icon',
          readableName: 'Film Marker',
          libraryName: 'FilmMarkerIcon'
        },
        {
          name: 'fireball-icon',
          readableName: 'Fireball',
          libraryName: 'FireballIcon'
        },
        {
          name: 'flag-icon',
          readableName: 'Flag',
          libraryName: 'FlagIcon'
        },
        {
          name: 'flash-off-icon',
          readableName: 'Flash Off',
          libraryName: 'FlashOffIcon'
        },
        {
          name: 'flame-icon',
          readableName: 'Flame',
          libraryName: 'FlameIcon'
        },
        {
          name: 'folder-icon',
          readableName: 'Folder',
          libraryName: 'FolderIcon'
        },
        {
          name: 'flash-icon',
          readableName: 'Flash',
          libraryName: 'FlashIcon'
        },
        {
          name: 'fork-icon',
          readableName: 'Fork',
          libraryName: 'ForkIcon'
        },
        {
          name: 'fork-repo-icon',
          readableName: 'Fork Repo',
          libraryName: 'ForkRepoIcon'
        },
        {
          name: 'funnel-icon',
          readableName: 'Funnel',
          libraryName: 'FunnelIcon'
        },
        {
          name: 'forward-icon',
          readableName: 'Forward',
          libraryName: 'ForwardIcon'
        },
        {
          name: 'gear-a-icon',
          readableName: 'Gear A',
          libraryName: 'GearAIcon'
        },
        {
          name: 'gear-b-icon',
          readableName: 'Gear B',
          libraryName: 'GearBIcon'
        },
        {
          name: 'hammer-icon',
          readableName: 'Hammer',
          libraryName: 'HammerIcon'
        },
        {
          name: 'happy-outline-icon',
          readableName: 'Happy Outline',
          libraryName: 'HappyOutlineIcon'
        },
        {
          name: 'grid-icon',
          readableName: 'Grid',
          libraryName: 'GridIcon'
        },
        {
          name: 'headphone-icon',
          readableName: 'Headphone',
          libraryName: 'HeadphoneIcon'
        },
        {
          name: 'happy-icon',
          readableName: 'Happy',
          libraryName: 'HappyIcon'
        },
        {
          name: 'heart-broken-icon',
          readableName: 'Heart Broken',
          libraryName: 'HeartBrokenIcon'
        },
        {
          name: 'heart-icon',
          readableName: 'Heart',
          libraryName: 'HeartIcon'
        },
        {
          name: 'help-buoy-icon',
          readableName: 'Help Buoy',
          libraryName: 'HelpBuoyIcon'
        },
        {
          name: 'help-circled-icon',
          readableName: 'Help Circled',
          libraryName: 'HelpCircledIcon'
        },
        {
          name: 'help-icon',
          readableName: 'Help',
          libraryName: 'HelpIcon'
        },
        {
          name: 'home-icon',
          readableName: 'Home',
          libraryName: 'HomeIcon'
        },
        {
          name: 'icecream-icon',
          readableName: 'Icecream',
          libraryName: 'IcecreamIcon'
        },
        {
          name: 'image-icon',
          readableName: 'Image',
          libraryName: 'ImageIcon'
        },
        {
          name: 'images-icon',
          readableName: 'Images',
          libraryName: 'ImagesIcon'
        },
        {
          name: 'information-icon',
          readableName: 'Information',
          libraryName: 'InformationIcon'
        },
        {
          name: 'ionic-icon',
          readableName: 'Ionic',
          libraryName: 'IonicIcon'
        },
        {
          name: 'information-circled-icon',
          readableName: 'Information Circled',
          libraryName: 'InformationCircledIcon'
        },
        {
          name: 'ios-alarm-icon',
          readableName: 'Ios Alarm',
          libraryName: 'IosAlarmIcon'
        },
        {
          name: 'ios-albums-outline-icon',
          readableName: 'Ios Albums Outline',
          libraryName: 'IosAlbumsOutlineIcon'
        },
        {
          name: 'ios-albums-icon',
          readableName: 'Ios Albums',
          libraryName: 'IosAlbumsIcon'
        },
        {
          name: 'ios-alarm-outline-icon',
          readableName: 'Ios Alarm Outline',
          libraryName: 'IosAlarmOutlineIcon'
        },
        {
          name: 'ios-americanfootball-outline-icon',
          readableName: 'Ios Americanfootball Outline',
          libraryName: 'IosAmericanfootballOutlineIcon'
        },
        {
          name: 'ios-americanfootball-icon',
          readableName: 'Ios Americanfootball',
          libraryName: 'IosAmericanfootballIcon'
        },
        {
          name: 'ios-analytics-outline-icon',
          readableName: 'Ios Analytics Outline',
          libraryName: 'IosAnalyticsOutlineIcon'
        },
        {
          name: 'ios-analytics-icon',
          readableName: 'Ios Analytics',
          libraryName: 'IosAnalyticsIcon'
        },
        {
          name: 'ios-arrow-back-icon',
          readableName: 'Ios Arrow Back',
          libraryName: 'IosArrowBackIcon'
        },
        {
          name: 'ios-arrow-down-icon',
          readableName: 'Ios Arrow Down',
          libraryName: 'IosArrowDownIcon'
        },
        {
          name: 'ios-arrow-forward-icon',
          readableName: 'Ios Arrow Forward',
          libraryName: 'IosArrowForwardIcon'
        },
        {
          name: 'ios-arrow-left-icon',
          readableName: 'Ios Arrow Left',
          libraryName: 'IosArrowLeftIcon'
        },
        {
          name: 'ios-arrow-thin-down-icon',
          readableName: 'Ios Arrow Thin Down',
          libraryName: 'IosArrowThinDownIcon'
        },
        {
          name: 'ios-arrow-thin-left-icon',
          readableName: 'Ios Arrow Thin Left',
          libraryName: 'IosArrowThinLeftIcon'
        },
        {
          name: 'ios-arrow-right-icon',
          readableName: 'Ios Arrow Right',
          libraryName: 'IosArrowRightIcon'
        },
        {
          name: 'ios-arrow-thin-right-icon',
          readableName: 'Ios Arrow Thin Right',
          libraryName: 'IosArrowThinRightIcon'
        },
        {
          name: 'ios-arrow-thin-up-icon',
          readableName: 'Ios Arrow Thin Up',
          libraryName: 'IosArrowThinUpIcon'
        },
        {
          name: 'ios-arrow-up-icon',
          readableName: 'Ios Arrow Up',
          libraryName: 'IosArrowUpIcon'
        },
        {
          name: 'ios-at-outline-icon',
          readableName: 'Ios At Outline',
          libraryName: 'IosAtOutlineIcon'
        },
        {
          name: 'ios-at-icon',
          readableName: 'Ios At',
          libraryName: 'IosAtIcon'
        },
        {
          name: 'ios-barcode-outline-icon',
          readableName: 'Ios Barcode Outline',
          libraryName: 'IosBarcodeOutlineIcon'
        },
        {
          name: 'ios-barcode-icon',
          readableName: 'Ios Barcode',
          libraryName: 'IosBarcodeIcon'
        },
        {
          name: 'ios-baseball-outline-icon',
          readableName: 'Ios Baseball Outline',
          libraryName: 'IosBaseballOutlineIcon'
        },
        {
          name: 'ios-baseball-icon',
          readableName: 'Ios Baseball',
          libraryName: 'IosBaseballIcon'
        },
        {
          name: 'ios-basketball-outline-icon',
          readableName: 'Ios Basketball Outline',
          libraryName: 'IosBasketballOutlineIcon'
        },
        {
          name: 'ios-basketball-icon',
          readableName: 'Ios Basketball',
          libraryName: 'IosBasketballIcon'
        },
        {
          name: 'ios-bell-outline-icon',
          readableName: 'Ios Bell Outline',
          libraryName: 'IosBellOutlineIcon'
        },
        {
          name: 'ios-bell-icon',
          readableName: 'Ios Bell',
          libraryName: 'IosBellIcon'
        },
        {
          name: 'ios-body-outline-icon',
          readableName: 'Ios Body Outline',
          libraryName: 'IosBodyOutlineIcon'
        },
        {
          name: 'ios-body-icon',
          readableName: 'Ios Body',
          libraryName: 'IosBodyIcon'
        },
        {
          name: 'ios-bolt-outline-icon',
          readableName: 'Ios Bolt Outline',
          libraryName: 'IosBoltOutlineIcon'
        },
        {
          name: 'ios-bolt-icon',
          readableName: 'Ios Bolt',
          libraryName: 'IosBoltIcon'
        },
        {
          name: 'ios-book-outline-icon',
          readableName: 'Ios Book Outline',
          libraryName: 'IosBookOutlineIcon'
        },
        {
          name: 'ios-book-icon',
          readableName: 'Ios Book',
          libraryName: 'IosBookIcon'
        },
        {
          name: 'ios-bookmarks-outline-icon',
          readableName: 'Ios Bookmarks Outline',
          libraryName: 'IosBookmarksOutlineIcon'
        },
        {
          name: 'ios-bookmarks-icon',
          readableName: 'Ios Bookmarks',
          libraryName: 'IosBookmarksIcon'
        },
        {
          name: 'ios-box-icon',
          readableName: 'Ios Box',
          libraryName: 'IosBoxIcon'
        },
        {
          name: 'ios-box-outline-icon',
          readableName: 'Ios Box Outline',
          libraryName: 'IosBoxOutlineIcon'
        },
        {
          name: 'ios-briefcase-outline-icon',
          readableName: 'Ios Briefcase Outline',
          libraryName: 'IosBriefcaseOutlineIcon'
        },
        {
          name: 'ios-briefcase-icon',
          readableName: 'Ios Briefcase',
          libraryName: 'IosBriefcaseIcon'
        },
        {
          name: 'ios-browsers-icon',
          readableName: 'Ios Browsers',
          libraryName: 'IosBrowsersIcon'
        },
        {
          name: 'ios-browsers-outline-icon',
          readableName: 'Ios Browsers Outline',
          libraryName: 'IosBrowsersOutlineIcon'
        },
        {
          name: 'ios-calculator-outline-icon',
          readableName: 'Ios Calculator Outline',
          libraryName: 'IosCalculatorOutlineIcon'
        },
        {
          name: 'ios-calculator-icon',
          readableName: 'Ios Calculator',
          libraryName: 'IosCalculatorIcon'
        },
        {
          name: 'ios-calendar-icon',
          readableName: 'Ios Calendar',
          libraryName: 'IosCalendarIcon'
        },
        {
          name: 'ios-camera-outline-icon',
          readableName: 'Ios Camera Outline',
          libraryName: 'IosCameraOutlineIcon'
        },
        {
          name: 'ios-camera-icon',
          readableName: 'Ios Camera',
          libraryName: 'IosCameraIcon'
        },
        {
          name: 'ios-cart-icon',
          readableName: 'Ios Cart',
          libraryName: 'IosCartIcon'
        },
        {
          name: 'ios-calendar-outline-icon',
          readableName: 'Ios Calendar Outline',
          libraryName: 'IosCalendarOutlineIcon'
        },
        {
          name: 'ios-chatboxes-outline-icon',
          readableName: 'Ios Chatboxes Outline',
          libraryName: 'IosChatboxesOutlineIcon'
        },
        {
          name: 'ios-chatbubble-outline-icon',
          readableName: 'Ios Chatbubble Outline',
          libraryName: 'IosChatbubbleOutlineIcon'
        },
        {
          name: 'ios-chatbubble-icon',
          readableName: 'Ios Chatbubble',
          libraryName: 'IosChatbubbleIcon'
        },
        {
          name: 'ios-cart-outline-icon',
          readableName: 'Ios Cart Outline',
          libraryName: 'IosCartOutlineIcon'
        },
        {
          name: 'ios-checkmark-empty-icon',
          readableName: 'Ios Checkmark Empty',
          libraryName: 'IosCheckmarkEmptyIcon'
        },
        {
          name: 'ios-chatboxes-icon',
          readableName: 'Ios Chatboxes',
          libraryName: 'IosChatboxesIcon'
        },
        {
          name: 'ios-checkmark-outline-icon',
          readableName: 'Ios Checkmark Outline',
          libraryName: 'IosCheckmarkOutlineIcon'
        },
        {
          name: 'ios-checkmark-icon',
          readableName: 'Ios Checkmark',
          libraryName: 'IosCheckmarkIcon'
        },
        {
          name: 'ios-circle-filled-icon',
          readableName: 'Ios Circle Filled',
          libraryName: 'IosCircleFilledIcon'
        },
        {
          name: 'ios-circle-outline-icon',
          readableName: 'Ios Circle Outline',
          libraryName: 'IosCircleOutlineIcon'
        },
        {
          name: 'ios-clock-outline-icon',
          readableName: 'Ios Clock Outline',
          libraryName: 'IosClockOutlineIcon'
        },
        {
          name: 'ios-clock-icon',
          readableName: 'Ios Clock',
          libraryName: 'IosClockIcon'
        },
        {
          name: 'ios-close-outline-icon',
          readableName: 'Ios Close Outline',
          libraryName: 'IosCloseOutlineIcon'
        },
        {
          name: 'ios-close-empty-icon',
          readableName: 'Ios Close Empty',
          libraryName: 'IosCloseEmptyIcon'
        },
        {
          name: 'ios-close-icon',
          readableName: 'Ios Close',
          libraryName: 'IosCloseIcon'
        },
        {
          name: 'ios-cloud-download-outline-icon',
          readableName: 'Ios Cloud Download Outline',
          libraryName: 'IosCloudDownloadOutlineIcon'
        },
        {
          name: 'ios-cloud-download-icon',
          readableName: 'Ios Cloud Download',
          libraryName: 'IosCloudDownloadIcon'
        },
        {
          name: 'ios-cloud-outline-icon',
          readableName: 'Ios Cloud Outline',
          libraryName: 'IosCloudOutlineIcon'
        },
        {
          name: 'ios-cloud-upload-outline-icon',
          readableName: 'Ios Cloud Upload Outline',
          libraryName: 'IosCloudUploadOutlineIcon'
        },
        {
          name: 'ios-cloud-icon',
          readableName: 'Ios Cloud',
          libraryName: 'IosCloudIcon'
        },
        {
          name: 'ios-cloud-upload-icon',
          readableName: 'Ios Cloud Upload',
          libraryName: 'IosCloudUploadIcon'
        },
        {
          name: 'ios-cloudy-night-outline-icon',
          readableName: 'Ios Cloudy Night Outline',
          libraryName: 'IosCloudyNightOutlineIcon'
        },
        {
          name: 'ios-cloudy-night-icon',
          readableName: 'Ios Cloudy Night',
          libraryName: 'IosCloudyNightIcon'
        },
        {
          name: 'ios-cloudy-outline-icon',
          readableName: 'Ios Cloudy Outline',
          libraryName: 'IosCloudyOutlineIcon'
        },
        {
          name: 'ios-cloudy-icon',
          readableName: 'Ios Cloudy',
          libraryName: 'IosCloudyIcon'
        },
        {
          name: 'ios-cog-outline-icon',
          readableName: 'Ios Cog Outline',
          libraryName: 'IosCogOutlineIcon'
        },
        {
          name: 'ios-cog-icon',
          readableName: 'Ios Cog',
          libraryName: 'IosCogIcon'
        },
        {
          name: 'ios-color-filter-icon',
          readableName: 'Ios Color Filter',
          libraryName: 'IosColorFilterIcon'
        },
        {
          name: 'ios-color-filter-outline-icon',
          readableName: 'Ios Color Filter Outline',
          libraryName: 'IosColorFilterOutlineIcon'
        },
        {
          name: 'ios-color-wand-outline-icon',
          readableName: 'Ios Color Wand Outline',
          libraryName: 'IosColorWandOutlineIcon'
        },
        {
          name: 'ios-compose-icon',
          readableName: 'Ios Compose',
          libraryName: 'IosComposeIcon'
        },
        {
          name: 'ios-compose-outline-icon',
          readableName: 'Ios Compose Outline',
          libraryName: 'IosComposeOutlineIcon'
        },
        {
          name: 'ios-contact-outline-icon',
          readableName: 'Ios Contact Outline',
          libraryName: 'IosContactOutlineIcon'
        },
        {
          name: 'ios-color-wand-icon',
          readableName: 'Ios Color Wand',
          libraryName: 'IosColorWandIcon'
        },
        {
          name: 'ios-contact-icon',
          readableName: 'Ios Contact',
          libraryName: 'IosContactIcon'
        },
        {
          name: 'ios-copy-outline-icon',
          readableName: 'Ios Copy Outline',
          libraryName: 'IosCopyOutlineIcon'
        },
        {
          name: 'ios-copy-icon',
          readableName: 'Ios Copy',
          libraryName: 'IosCopyIcon'
        },
        {
          name: 'ios-crop-strong-icon',
          readableName: 'Ios Crop Strong',
          libraryName: 'IosCropStrongIcon'
        },
        {
          name: 'ios-crop-icon',
          readableName: 'Ios Crop',
          libraryName: 'IosCropIcon'
        },
        {
          name: 'ios-drag-icon',
          readableName: 'Ios Drag',
          libraryName: 'IosDragIcon'
        },
        {
          name: 'ios-download-outline-icon',
          readableName: 'Ios Download Outline',
          libraryName: 'IosDownloadOutlineIcon'
        },
        {
          name: 'ios-download-icon',
          readableName: 'Ios Download',
          libraryName: 'IosDownloadIcon'
        },
        {
          name: 'ios-email-outline-icon',
          readableName: 'Ios Email Outline',
          libraryName: 'IosEmailOutlineIcon'
        },
        {
          name: 'ios-eye-outline-icon',
          readableName: 'Ios Eye Outline',
          libraryName: 'IosEyeOutlineIcon'
        },
        {
          name: 'ios-eye-icon',
          readableName: 'Ios Eye',
          libraryName: 'IosEyeIcon'
        },
        {
          name: 'ios-fastforward-outline-icon',
          readableName: 'Ios Fastforward Outline',
          libraryName: 'IosFastforwardOutlineIcon'
        },
        {
          name: 'ios-email-icon',
          readableName: 'Ios Email',
          libraryName: 'IosEmailIcon'
        },
        {
          name: 'ios-fastforward-icon',
          readableName: 'Ios Fastforward',
          libraryName: 'IosFastforwardIcon'
        },
        {
          name: 'ios-filing-outline-icon',
          readableName: 'Ios Filing Outline',
          libraryName: 'IosFilingOutlineIcon'
        },
        {
          name: 'ios-filing-icon',
          readableName: 'Ios Filing',
          libraryName: 'IosFilingIcon'
        },
        {
          name: 'ios-film-outline-icon',
          readableName: 'Ios Film Outline',
          libraryName: 'IosFilmOutlineIcon'
        },
        {
          name: 'ios-film-icon',
          readableName: 'Ios Film',
          libraryName: 'IosFilmIcon'
        },
        {
          name: 'ios-flag-outline-icon',
          readableName: 'Ios Flag Outline',
          libraryName: 'IosFlagOutlineIcon'
        },
        {
          name: 'ios-flag-icon',
          readableName: 'Ios Flag',
          libraryName: 'IosFlagIcon'
        },
        {
          name: 'ios-flame-outline-icon',
          readableName: 'Ios Flame Outline',
          libraryName: 'IosFlameOutlineIcon'
        },
        {
          name: 'ios-flame-icon',
          readableName: 'Ios Flame',
          libraryName: 'IosFlameIcon'
        },
        {
          name: 'ios-flask-outline-icon',
          readableName: 'Ios Flask Outline',
          libraryName: 'IosFlaskOutlineIcon'
        },
        {
          name: 'ios-flask-icon',
          readableName: 'Ios Flask',
          libraryName: 'IosFlaskIcon'
        },
        {
          name: 'ios-flower-icon',
          readableName: 'Ios Flower',
          libraryName: 'IosFlowerIcon'
        },
        {
          name: 'ios-folder-outline-icon',
          readableName: 'Ios Folder Outline',
          libraryName: 'IosFolderOutlineIcon'
        },
        {
          name: 'ios-folder-icon',
          readableName: 'Ios Folder',
          libraryName: 'IosFolderIcon'
        },
        {
          name: 'ios-football-outline-icon',
          readableName: 'Ios Football Outline',
          libraryName: 'IosFootballOutlineIcon'
        },
        {
          name: 'ios-football-icon',
          readableName: 'Ios Football',
          libraryName: 'IosFootballIcon'
        },
        {
          name: 'ios-game-controller-a-outline-icon',
          readableName: 'Ios Game Controller A Outline',
          libraryName: 'IosGameControllerAOutlineIcon'
        },
        {
          name: 'ios-flower-outline-icon',
          readableName: 'Ios Flower Outline',
          libraryName: 'IosFlowerOutlineIcon'
        },
        {
          name: 'ios-game-controller-a-icon',
          readableName: 'Ios Game Controller A',
          libraryName: 'IosGameControllerAIcon'
        },
        {
          name: 'ios-game-controller-b-outline-icon',
          readableName: 'Ios Game Controller B Outline',
          libraryName: 'IosGameControllerBOutlineIcon'
        },
        {
          name: 'ios-game-controller-b-icon',
          readableName: 'Ios Game Controller B',
          libraryName: 'IosGameControllerBIcon'
        },
        {
          name: 'ios-gear-outline-icon',
          readableName: 'Ios Gear Outline',
          libraryName: 'IosGearOutlineIcon'
        },
        {
          name: 'ios-gear-icon',
          readableName: 'Ios Gear',
          libraryName: 'IosGearIcon'
        },
        {
          name: 'ios-glasses-icon',
          readableName: 'Ios Glasses',
          libraryName: 'IosGlassesIcon'
        },
        {
          name: 'ios-glasses-outline-icon',
          readableName: 'Ios Glasses Outline',
          libraryName: 'IosGlassesOutlineIcon'
        },
        {
          name: 'ios-grid-view-outline-icon',
          readableName: 'Ios Grid View Outline',
          libraryName: 'IosGridViewOutlineIcon'
        },
        {
          name: 'ios-grid-view-icon',
          readableName: 'Ios Grid View',
          libraryName: 'IosGridViewIcon'
        },
        {
          name: 'ios-help-empty-icon',
          readableName: 'Ios Help Empty',
          libraryName: 'IosHelpEmptyIcon'
        },
        {
          name: 'ios-heart-icon',
          readableName: 'Ios Heart',
          libraryName: 'IosHeartIcon'
        },
        {
          name: 'ios-heart-outline-icon',
          readableName: 'Ios Heart Outline',
          libraryName: 'IosHeartOutlineIcon'
        },
        {
          name: 'ios-help-outline-icon',
          readableName: 'Ios Help Outline',
          libraryName: 'IosHelpOutlineIcon'
        },
        {
          name: 'ios-help-icon',
          readableName: 'Ios Help',
          libraryName: 'IosHelpIcon'
        },
        {
          name: 'ios-home-outline-icon',
          readableName: 'Ios Home Outline',
          libraryName: 'IosHomeOutlineIcon'
        },
        {
          name: 'ios-home-icon',
          readableName: 'Ios Home',
          libraryName: 'IosHomeIcon'
        },
        {
          name: 'ios-infinite-outline-icon',
          readableName: 'Ios Infinite Outline',
          libraryName: 'IosInfiniteOutlineIcon'
        },
        {
          name: 'ios-information-outline-icon',
          readableName: 'Ios Information Outline',
          libraryName: 'IosInformationOutlineIcon'
        },
        {
          name: 'ios-information-empty-icon',
          readableName: 'Ios Information Empty',
          libraryName: 'IosInformationEmptyIcon'
        },
        {
          name: 'ios-information-icon',
          readableName: 'Ios Information',
          libraryName: 'IosInformationIcon'
        },
        {
          name: 'ios-infinite-icon',
          readableName: 'Ios Infinite',
          libraryName: 'IosInfiniteIcon'
        },
        {
          name: 'ios-ionic-outline-icon',
          readableName: 'Ios Ionic Outline',
          libraryName: 'IosIonicOutlineIcon'
        },
        {
          name: 'ios-keypad-outline-icon',
          readableName: 'Ios Keypad Outline',
          libraryName: 'IosKeypadOutlineIcon'
        },
        {
          name: 'ios-keypad-icon',
          readableName: 'Ios Keypad',
          libraryName: 'IosKeypadIcon'
        },
        {
          name: 'ios-lightbulb-outline-icon',
          readableName: 'Ios Lightbulb Outline',
          libraryName: 'IosLightbulbOutlineIcon'
        },
        {
          name: 'ios-lightbulb-icon',
          readableName: 'Ios Lightbulb',
          libraryName: 'IosLightbulbIcon'
        },
        {
          name: 'ios-list-outline-icon',
          readableName: 'Ios List Outline',
          libraryName: 'IosListOutlineIcon'
        },
        {
          name: 'ios-list-icon',
          readableName: 'Ios List',
          libraryName: 'IosListIcon'
        },
        {
          name: 'ios-location-outline-icon',
          readableName: 'Ios Location Outline',
          libraryName: 'IosLocationOutlineIcon'
        },
        {
          name: 'ios-location-icon',
          readableName: 'Ios Location',
          libraryName: 'IosLocationIcon'
        },
        {
          name: 'ios-locked-outline-icon',
          readableName: 'Ios Locked Outline',
          libraryName: 'IosLockedOutlineIcon'
        },
        {
          name: 'ios-locked-icon',
          readableName: 'Ios Locked',
          libraryName: 'IosLockedIcon'
        },
        {
          name: 'ios-loop-strong-icon',
          readableName: 'Ios Loop Strong',
          libraryName: 'IosLoopStrongIcon'
        },
        {
          name: 'ios-loop-icon',
          readableName: 'Ios Loop',
          libraryName: 'IosLoopIcon'
        },
        {
          name: 'ios-medical-outline-icon',
          readableName: 'Ios Medical Outline',
          libraryName: 'IosMedicalOutlineIcon'
        },
        {
          name: 'ios-medical-icon',
          readableName: 'Ios Medical',
          libraryName: 'IosMedicalIcon'
        },
        {
          name: 'ios-medkit-outline-icon',
          readableName: 'Ios Medkit Outline',
          libraryName: 'IosMedkitOutlineIcon'
        },
        {
          name: 'ios-mic-outline-icon',
          readableName: 'Ios Mic Outline',
          libraryName: 'IosMicOutlineIcon'
        },
        {
          name: 'ios-mic-off-icon',
          readableName: 'Ios Mic Off',
          libraryName: 'IosMicOffIcon'
        },
        {
          name: 'ios-mic-icon',
          readableName: 'Ios Mic',
          libraryName: 'IosMicIcon'
        },
        {
          name: 'ios-minus-empty-icon',
          readableName: 'Ios Minus Empty',
          libraryName: 'IosMinusEmptyIcon'
        },
        {
          name: 'ios-medkit-icon',
          readableName: 'Ios Medkit',
          libraryName: 'IosMedkitIcon'
        },
        {
          name: 'ios-minus-outline-icon',
          readableName: 'Ios Minus Outline',
          libraryName: 'IosMinusOutlineIcon'
        },
        {
          name: 'ios-minus-icon',
          readableName: 'Ios Minus',
          libraryName: 'IosMinusIcon'
        },
        {
          name: 'ios-monitor-outline-icon',
          readableName: 'Ios Monitor Outline',
          libraryName: 'IosMonitorOutlineIcon'
        },
        {
          name: 'ios-monitor-icon',
          readableName: 'Ios Monitor',
          libraryName: 'IosMonitorIcon'
        },
        {
          name: 'ios-moon-outline-icon',
          readableName: 'Ios Moon Outline',
          libraryName: 'IosMoonOutlineIcon'
        },
        {
          name: 'ios-more-outline-icon',
          readableName: 'Ios More Outline',
          libraryName: 'IosMoreOutlineIcon'
        },
        {
          name: 'ios-moon-icon',
          readableName: 'Ios Moon',
          libraryName: 'IosMoonIcon'
        },
        {
          name: 'ios-more-icon',
          readableName: 'Ios More',
          libraryName: 'IosMoreIcon'
        },
        {
          name: 'ios-musical-note-icon',
          readableName: 'Ios Musical Note',
          libraryName: 'IosMusicalNoteIcon'
        },
        {
          name: 'ios-navigate-outline-icon',
          readableName: 'Ios Navigate Outline',
          libraryName: 'IosNavigateOutlineIcon'
        },
        {
          name: 'ios-musical-notes-icon',
          readableName: 'Ios Musical Notes',
          libraryName: 'IosMusicalNotesIcon'
        },
        {
          name: 'ios-navigate-icon',
          readableName: 'Ios Navigate',
          libraryName: 'IosNavigateIcon'
        },
        {
          name: 'ios-nutrition-outline-icon',
          readableName: 'Ios Nutrition Outline',
          libraryName: 'IosNutritionOutlineIcon'
        },
        {
          name: 'ios-paper-outline-icon',
          readableName: 'Ios Paper Outline',
          libraryName: 'IosPaperOutlineIcon'
        },
        {
          name: 'ios-paper-icon',
          readableName: 'Ios Paper',
          libraryName: 'IosPaperIcon'
        },
        {
          name: 'ios-nutrition-icon',
          readableName: 'Ios Nutrition',
          libraryName: 'IosNutritionIcon'
        },
        {
          name: 'ios-paperplane-outline-icon',
          readableName: 'Ios Paperplane Outline',
          libraryName: 'IosPaperplaneOutlineIcon'
        },
        {
          name: 'ios-paperplane-icon',
          readableName: 'Ios Paperplane',
          libraryName: 'IosPaperplaneIcon'
        },
        {
          name: 'ios-partlysunny-outline-icon',
          readableName: 'Ios Partlysunny Outline',
          libraryName: 'IosPartlysunnyOutlineIcon'
        },
        {
          name: 'ios-partlysunny-icon',
          readableName: 'Ios Partlysunny',
          libraryName: 'IosPartlysunnyIcon'
        },
        {
          name: 'ios-pause-outline-icon',
          readableName: 'Ios Pause Outline',
          libraryName: 'IosPauseOutlineIcon'
        },
        {
          name: 'ios-paw-outline-icon',
          readableName: 'Ios Paw Outline',
          libraryName: 'IosPawOutlineIcon'
        },
        {
          name: 'ios-pause-icon',
          readableName: 'Ios Pause',
          libraryName: 'IosPauseIcon'
        },
        {
          name: 'ios-people-outline-icon',
          readableName: 'Ios People Outline',
          libraryName: 'IosPeopleOutlineIcon'
        },
        {
          name: 'ios-people-icon',
          readableName: 'Ios People',
          libraryName: 'IosPeopleIcon'
        },
        {
          name: 'ios-person-outline-icon',
          readableName: 'Ios Person Outline',
          libraryName: 'IosPersonOutlineIcon'
        },
        {
          name: 'ios-person-icon',
          readableName: 'Ios Person',
          libraryName: 'IosPersonIcon'
        },
        {
          name: 'ios-paw-icon',
          readableName: 'Ios Paw',
          libraryName: 'IosPawIcon'
        },
        {
          name: 'ios-personadd-outline-icon',
          readableName: 'Ios Personadd Outline',
          libraryName: 'IosPersonaddOutlineIcon'
        },
        {
          name: 'ios-personadd-icon',
          readableName: 'Ios Personadd',
          libraryName: 'IosPersonaddIcon'
        },
        {
          name: 'ios-photos-outline-icon',
          readableName: 'Ios Photos Outline',
          libraryName: 'IosPhotosOutlineIcon'
        },
        {
          name: 'ios-photos-icon',
          readableName: 'Ios Photos',
          libraryName: 'IosPhotosIcon'
        },
        {
          name: 'ios-pie-outline-icon',
          readableName: 'Ios Pie Outline',
          libraryName: 'IosPieOutlineIcon'
        },
        {
          name: 'ios-pie-icon',
          readableName: 'Ios Pie',
          libraryName: 'IosPieIcon'
        },
        {
          name: 'ios-pint-outline-icon',
          readableName: 'Ios Pint Outline',
          libraryName: 'IosPintOutlineIcon'
        },
        {
          name: 'ios-pint-icon',
          readableName: 'Ios Pint',
          libraryName: 'IosPintIcon'
        },
        {
          name: 'ios-play-outline-icon',
          readableName: 'Ios Play Outline',
          libraryName: 'IosPlayOutlineIcon'
        },
        {
          name: 'ios-play-icon',
          readableName: 'Ios Play',
          libraryName: 'IosPlayIcon'
        },
        {
          name: 'ios-plus-empty-icon',
          readableName: 'Ios Plus Empty',
          libraryName: 'IosPlusEmptyIcon'
        },
        {
          name: 'ios-plus-outline-icon',
          readableName: 'Ios Plus Outline',
          libraryName: 'IosPlusOutlineIcon'
        },
        {
          name: 'ios-plus-icon',
          readableName: 'Ios Plus',
          libraryName: 'IosPlusIcon'
        },
        {
          name: 'ios-pricetag-outline-icon',
          readableName: 'Ios Pricetag Outline',
          libraryName: 'IosPricetagOutlineIcon'
        },
        {
          name: 'ios-pricetag-icon',
          readableName: 'Ios Pricetag',
          libraryName: 'IosPricetagIcon'
        },
        {
          name: 'ios-pricetags-outline-icon',
          readableName: 'Ios Pricetags Outline',
          libraryName: 'IosPricetagsOutlineIcon'
        },
        {
          name: 'ios-pricetags-icon',
          readableName: 'Ios Pricetags',
          libraryName: 'IosPricetagsIcon'
        },
        {
          name: 'ios-printer-icon',
          readableName: 'Ios Printer',
          libraryName: 'IosPrinterIcon'
        },
        {
          name: 'ios-pulse-strong-icon',
          readableName: 'Ios Pulse Strong',
          libraryName: 'IosPulseStrongIcon'
        },
        {
          name: 'ios-printer-outline-icon',
          readableName: 'Ios Printer Outline',
          libraryName: 'IosPrinterOutlineIcon'
        },
        {
          name: 'ios-pulse-icon',
          readableName: 'Ios Pulse',
          libraryName: 'IosPulseIcon'
        },
        {
          name: 'ios-rainy-outline-icon',
          readableName: 'Ios Rainy Outline',
          libraryName: 'IosRainyOutlineIcon'
        },
        {
          name: 'ios-rainy-icon',
          readableName: 'Ios Rainy',
          libraryName: 'IosRainyIcon'
        },
        {
          name: 'ios-recording-outline-icon',
          readableName: 'Ios Recording Outline',
          libraryName: 'IosRecordingOutlineIcon'
        },
        {
          name: 'ios-recording-icon',
          readableName: 'Ios Recording',
          libraryName: 'IosRecordingIcon'
        },
        {
          name: 'ios-redo-outline-icon',
          readableName: 'Ios Redo Outline',
          libraryName: 'IosRedoOutlineIcon'
        },
        {
          name: 'ios-redo-icon',
          readableName: 'Ios Redo',
          libraryName: 'IosRedoIcon'
        },
        {
          name: 'ios-refresh-empty-icon',
          readableName: 'Ios Refresh Empty',
          libraryName: 'IosRefreshEmptyIcon'
        },
        {
          name: 'ios-refresh-outline-icon',
          readableName: 'Ios Refresh Outline',
          libraryName: 'IosRefreshOutlineIcon'
        },
        {
          name: 'ios-refresh-icon',
          readableName: 'Ios Refresh',
          libraryName: 'IosRefreshIcon'
        },
        {
          name: 'ios-reload-icon',
          readableName: 'Ios Reload',
          libraryName: 'IosReloadIcon'
        },
        {
          name: 'ios-reverse-camera-outline-icon',
          readableName: 'Ios Reverse Camera Outline',
          libraryName: 'IosReverseCameraOutlineIcon'
        },
        {
          name: 'ios-reverse-camera-icon',
          readableName: 'Ios Reverse Camera',
          libraryName: 'IosReverseCameraIcon'
        },
        {
          name: 'ios-rewind-outline-icon',
          readableName: 'Ios Rewind Outline',
          libraryName: 'IosRewindOutlineIcon'
        },
        {
          name: 'ios-rewind-icon',
          readableName: 'Ios Rewind',
          libraryName: 'IosRewindIcon'
        },
        {
          name: 'ios-rose-icon',
          readableName: 'Ios Rose',
          libraryName: 'IosRoseIcon'
        },
        {
          name: 'ios-rose-outline-icon',
          readableName: 'Ios Rose Outline',
          libraryName: 'IosRoseOutlineIcon'
        },
        {
          name: 'ios-search-strong-icon',
          readableName: 'Ios Search Strong',
          libraryName: 'IosSearchStrongIcon'
        },
        {
          name: 'ios-search-icon',
          readableName: 'Ios Search',
          libraryName: 'IosSearchIcon'
        },
        {
          name: 'ios-settings-strong-icon',
          readableName: 'Ios Settings Strong',
          libraryName: 'IosSettingsStrongIcon'
        },
        {
          name: 'ios-settings-icon',
          readableName: 'Ios Settings',
          libraryName: 'IosSettingsIcon'
        },
        {
          name: 'ios-shuffle-strong-icon',
          readableName: 'Ios Shuffle Strong',
          libraryName: 'IosShuffleStrongIcon'
        },
        {
          name: 'ios-shuffle-icon',
          readableName: 'Ios Shuffle',
          libraryName: 'IosShuffleIcon'
        },
        {
          name: 'ios-skipbackward-outline-icon',
          readableName: 'Ios Skipbackward Outline',
          libraryName: 'IosSkipbackwardOutlineIcon'
        },
        {
          name: 'ios-skipbackward-icon',
          readableName: 'Ios Skipbackward',
          libraryName: 'IosSkipbackwardIcon'
        },
        {
          name: 'ios-skipforward-icon',
          readableName: 'Ios Skipforward',
          libraryName: 'IosSkipforwardIcon'
        },
        {
          name: 'ios-skipforward-outline-icon',
          readableName: 'Ios Skipforward Outline',
          libraryName: 'IosSkipforwardOutlineIcon'
        },
        {
          name: 'ios-snowy-icon',
          readableName: 'Ios Snowy',
          libraryName: 'IosSnowyIcon'
        },
        {
          name: 'ios-speedometer-outline-icon',
          readableName: 'Ios Speedometer Outline',
          libraryName: 'IosSpeedometerOutlineIcon'
        },
        {
          name: 'ios-speedometer-icon',
          readableName: 'Ios Speedometer',
          libraryName: 'IosSpeedometerIcon'
        },
        {
          name: 'ios-star-half-icon',
          readableName: 'Ios Star Half',
          libraryName: 'IosStarHalfIcon'
        },
        {
          name: 'ios-star-outline-icon',
          readableName: 'Ios Star Outline',
          libraryName: 'IosStarOutlineIcon'
        },
        {
          name: 'ios-star-icon',
          readableName: 'Ios Star',
          libraryName: 'IosStarIcon'
        },
        {
          name: 'ios-stopwatch-outline-icon',
          readableName: 'Ios Stopwatch Outline',
          libraryName: 'IosStopwatchOutlineIcon'
        },
        {
          name: 'ios-stopwatch-icon',
          readableName: 'Ios Stopwatch',
          libraryName: 'IosStopwatchIcon'
        },
        {
          name: 'ios-sunny-outline-icon',
          readableName: 'Ios Sunny Outline',
          libraryName: 'IosSunnyOutlineIcon'
        },
        {
          name: 'ios-sunny-icon',
          readableName: 'Ios Sunny',
          libraryName: 'IosSunnyIcon'
        },
        {
          name: 'ios-telephone-outline-icon',
          readableName: 'Ios Telephone Outline',
          libraryName: 'IosTelephoneOutlineIcon'
        },
        {
          name: 'ios-telephone-icon',
          readableName: 'Ios Telephone',
          libraryName: 'IosTelephoneIcon'
        },
        {
          name: 'ios-tennisball-outline-icon',
          readableName: 'Ios Tennisball Outline',
          libraryName: 'IosTennisballOutlineIcon'
        },
        {
          name: 'ios-tennisball-icon',
          readableName: 'Ios Tennisball',
          libraryName: 'IosTennisballIcon'
        },
        {
          name: 'ios-thunderstorm-outline-icon',
          readableName: 'Ios Thunderstorm Outline',
          libraryName: 'IosThunderstormOutlineIcon'
        },
        {
          name: 'ios-thunderstorm-icon',
          readableName: 'Ios Thunderstorm',
          libraryName: 'IosThunderstormIcon'
        },
        {
          name: 'ios-time-outline-icon',
          readableName: 'Ios Time Outline',
          libraryName: 'IosTimeOutlineIcon'
        },
        {
          name: 'ios-time-icon',
          readableName: 'Ios Time',
          libraryName: 'IosTimeIcon'
        },
        {
          name: 'ios-timer-outline-icon',
          readableName: 'Ios Timer Outline',
          libraryName: 'IosTimerOutlineIcon'
        },
        {
          name: 'ios-timer-icon',
          readableName: 'Ios Timer',
          libraryName: 'IosTimerIcon'
        },
        {
          name: 'ios-toggle-outline-icon',
          readableName: 'Ios Toggle Outline',
          libraryName: 'IosToggleOutlineIcon'
        },
        {
          name: 'ios-toggle-icon',
          readableName: 'Ios Toggle',
          libraryName: 'IosToggleIcon'
        },
        {
          name: 'ios-trash-outline-icon',
          readableName: 'Ios Trash Outline',
          libraryName: 'IosTrashOutlineIcon'
        },
        {
          name: 'ios-undo-icon',
          readableName: 'Ios Undo',
          libraryName: 'IosUndoIcon'
        },
        {
          name: 'ios-trash-icon',
          readableName: 'Ios Trash',
          libraryName: 'IosTrashIcon'
        },
        {
          name: 'ios-unlocked-outline-icon',
          readableName: 'Ios Unlocked Outline',
          libraryName: 'IosUnlockedOutlineIcon'
        },
        {
          name: 'ios-undo-outline-icon',
          readableName: 'Ios Undo Outline',
          libraryName: 'IosUndoOutlineIcon'
        },
        {
          name: 'ios-unlocked-icon',
          readableName: 'Ios Unlocked',
          libraryName: 'IosUnlockedIcon'
        },
        {
          name: 'ios-upload-outline-icon',
          readableName: 'Ios Upload Outline',
          libraryName: 'IosUploadOutlineIcon'
        },
        {
          name: 'ios-upload-icon',
          readableName: 'Ios Upload',
          libraryName: 'IosUploadIcon'
        },
        {
          name: 'ios-videocam-icon',
          readableName: 'Ios Videocam',
          libraryName: 'IosVideocamIcon'
        },
        {
          name: 'ios-videocam-outline-icon',
          readableName: 'Ios Videocam Outline',
          libraryName: 'IosVideocamOutlineIcon'
        },
        {
          name: 'ios-volume-low-icon',
          readableName: 'Ios Volume Low',
          libraryName: 'IosVolumeLowIcon'
        },
        {
          name: 'ios-volume-high-icon',
          readableName: 'Ios Volume High',
          libraryName: 'IosVolumeHighIcon'
        },
        {
          name: 'ios-wineglass-outline-icon',
          readableName: 'Ios Wineglass Outline',
          libraryName: 'IosWineglassOutlineIcon'
        },
        {
          name: 'ios-world-outline-icon',
          readableName: 'Ios World Outline',
          libraryName: 'IosWorldOutlineIcon'
        },
        {
          name: 'ios-world-icon',
          readableName: 'Ios World',
          libraryName: 'IosWorldIcon'
        },
        {
          name: 'ios-wineglass-icon',
          readableName: 'Ios Wineglass',
          libraryName: 'IosWineglassIcon'
        },
        {
          name: 'ipod-icon',
          readableName: 'Ipod',
          libraryName: 'IpodIcon'
        },
        {
          name: 'iphone-icon',
          readableName: 'Iphone',
          libraryName: 'IphoneIcon'
        },
        {
          name: 'jet-icon',
          readableName: 'Jet',
          libraryName: 'JetIcon'
        },
        {
          name: 'ipad-icon',
          readableName: 'Ipad',
          libraryName: 'IpadIcon'
        },
        {
          name: 'key-icon',
          readableName: 'Key',
          libraryName: 'KeyIcon'
        },
        {
          name: 'knife-icon',
          readableName: 'Knife',
          libraryName: 'KnifeIcon'
        },
        {
          name: 'lightbulb-icon',
          readableName: 'Lightbulb',
          libraryName: 'LightbulbIcon'
        },
        {
          name: 'levels-icon',
          readableName: 'Levels',
          libraryName: 'LevelsIcon'
        },
        {
          name: 'laptop-icon',
          readableName: 'Laptop',
          libraryName: 'LaptopIcon'
        },
        {
          name: 'leaf-icon',
          readableName: 'Leaf',
          libraryName: 'LeafIcon'
        },
        {
          name: 'load-a-icon',
          readableName: 'Load A',
          libraryName: 'LoadAIcon'
        },
        {
          name: 'load-c-icon',
          readableName: 'Load C',
          libraryName: 'LoadCIcon'
        },
        {
          name: 'load-b-icon',
          readableName: 'Load B',
          libraryName: 'LoadBIcon'
        },
        {
          name: 'location-icon',
          readableName: 'Location',
          libraryName: 'LocationIcon'
        },
        {
          name: 'lock-combination-icon',
          readableName: 'Lock Combination',
          libraryName: 'LockCombinationIcon'
        },
        {
          name: 'load-d-icon',
          readableName: 'Load D',
          libraryName: 'LoadDIcon'
        },
        {
          name: 'link-icon',
          readableName: 'Link',
          libraryName: 'LinkIcon'
        },
        {
          name: 'locked-icon',
          readableName: 'Locked',
          libraryName: 'LockedIcon'
        },
        {
          name: 'loop-icon',
          readableName: 'Loop',
          libraryName: 'LoopIcon'
        },
        {
          name: 'log-in-icon',
          readableName: 'Log In',
          libraryName: 'LogInIcon'
        },
        {
          name: 'log-out-icon',
          readableName: 'Log Out',
          libraryName: 'LogOutIcon'
        },
        {
          name: 'male-icon',
          readableName: 'Male',
          libraryName: 'MaleIcon'
        },
        {
          name: 'magnet-icon',
          readableName: 'Magnet',
          libraryName: 'MagnetIcon'
        },
        {
          name: 'man-icon',
          readableName: 'Man',
          libraryName: 'ManIcon'
        },
        {
          name: 'map-icon',
          readableName: 'Map',
          libraryName: 'MapIcon'
        },
        {
          name: 'medkit-icon',
          readableName: 'Medkit',
          libraryName: 'MedkitIcon'
        },
        {
          name: 'merge-icon',
          readableName: 'Merge',
          libraryName: 'MergeIcon'
        },
        {
          name: 'mic-a-icon',
          readableName: 'Mic A',
          libraryName: 'MicAIcon'
        },
        {
          name: 'mic-b-icon',
          readableName: 'Mic B',
          libraryName: 'MicBIcon'
        },
        {
          name: 'mic-c-icon',
          readableName: 'Mic C',
          libraryName: 'MicCIcon'
        },
        {
          name: 'minus-circled-icon',
          readableName: 'Minus Circled',
          libraryName: 'MinusCircledIcon'
        },
        {
          name: 'minus-round-icon',
          readableName: 'Minus Round',
          libraryName: 'MinusRoundIcon'
        },
        {
          name: 'model-s-icon',
          readableName: 'Model S',
          libraryName: 'ModelSIcon'
        },
        {
          name: 'minus-icon',
          readableName: 'Minus',
          libraryName: 'MinusIcon'
        },
        {
          name: 'mouse-icon',
          readableName: 'Mouse',
          libraryName: 'MouseIcon'
        },
        {
          name: 'more-icon',
          readableName: 'More',
          libraryName: 'MoreIcon'
        },
        {
          name: 'music-note-icon',
          readableName: 'Music Note',
          libraryName: 'MusicNoteIcon'
        },
        {
          name: 'navicon-round-icon',
          readableName: 'Navicon Round',
          libraryName: 'NaviconRoundIcon'
        },
        {
          name: 'navigate-icon',
          readableName: 'Navigate',
          libraryName: 'NavigateIcon'
        },
        {
          name: 'monitor-icon',
          readableName: 'Monitor',
          libraryName: 'MonitorIcon'
        },
        {
          name: 'navicon-icon',
          readableName: 'Navicon',
          libraryName: 'NaviconIcon'
        },
        {
          name: 'no-smoking-icon',
          readableName: 'No Smoking',
          libraryName: 'NoSmokingIcon'
        },
        {
          name: 'network-icon',
          readableName: 'Network',
          libraryName: 'NetworkIcon'
        },
        {
          name: 'nuclear-icon',
          readableName: 'Nuclear',
          libraryName: 'NuclearIcon'
        },
        {
          name: 'outlet-icon',
          readableName: 'Outlet',
          libraryName: 'OutletIcon'
        },
        {
          name: 'paintbrush-icon',
          readableName: 'Paintbrush',
          libraryName: 'PaintbrushIcon'
        },
        {
          name: 'paintbucket-icon',
          readableName: 'Paintbucket',
          libraryName: 'PaintbucketIcon'
        },
        {
          name: 'paperclip-icon',
          readableName: 'Paperclip',
          libraryName: 'PaperclipIcon'
        },
        {
          name: 'paper-airplane-icon',
          readableName: 'Paper Airplane',
          libraryName: 'PaperAirplaneIcon'
        },
        {
          name: 'pause-icon',
          readableName: 'Pause',
          libraryName: 'PauseIcon'
        },
        {
          name: 'person-stalker-icon',
          readableName: 'Person Stalker',
          libraryName: 'PersonStalkerIcon'
        },
        {
          name: 'person-icon',
          readableName: 'Person',
          libraryName: 'PersonIcon'
        },
        {
          name: 'person-add-icon',
          readableName: 'Person Add',
          libraryName: 'PersonAddIcon'
        },
        {
          name: 'pin-icon',
          readableName: 'Pin',
          libraryName: 'PinIcon'
        },
        {
          name: 'pie-graph-icon',
          readableName: 'Pie Graph',
          libraryName: 'PieGraphIcon'
        },
        {
          name: 'pinpoint-icon',
          readableName: 'Pinpoint',
          libraryName: 'PinpointIcon'
        },
        {
          name: 'pizza-icon',
          readableName: 'Pizza',
          libraryName: 'PizzaIcon'
        },
        {
          name: 'plane-icon',
          readableName: 'Plane',
          libraryName: 'PlaneIcon'
        },
        {
          name: 'play-icon',
          readableName: 'Play',
          libraryName: 'PlayIcon'
        },
        {
          name: 'playstation-icon',
          readableName: 'Playstation',
          libraryName: 'PlaystationIcon'
        },
        {
          name: 'plus-round-icon',
          readableName: 'Plus Round',
          libraryName: 'PlusRoundIcon'
        },
        {
          name: 'planet-icon',
          readableName: 'Planet',
          libraryName: 'PlanetIcon'
        },
        {
          name: 'plus-circled-icon',
          readableName: 'Plus Circled',
          libraryName: 'PlusCircledIcon'
        },
        {
          name: 'plus-icon',
          readableName: 'Plus',
          libraryName: 'PlusIcon'
        },
        {
          name: 'podium-icon',
          readableName: 'Podium',
          libraryName: 'PodiumIcon'
        },
        {
          name: 'power-icon',
          readableName: 'Power',
          libraryName: 'PowerIcon'
        },
        {
          name: 'pound-icon',
          readableName: 'Pound',
          libraryName: 'PoundIcon'
        },
        {
          name: 'pricetag-icon',
          readableName: 'Pricetag',
          libraryName: 'PricetagIcon'
        },
        {
          name: 'pull-request-icon',
          readableName: 'Pull Request',
          libraryName: 'PullRequestIcon'
        },
        {
          name: 'printer-icon',
          readableName: 'Printer',
          libraryName: 'PrinterIcon'
        },
        {
          name: 'qr-scanner-icon',
          readableName: 'Qr Scanner',
          libraryName: 'QrScannerIcon'
        },
        {
          name: 'pricetags-icon',
          readableName: 'Pricetags',
          libraryName: 'PricetagsIcon'
        },
        {
          name: 'radio-waves-icon',
          readableName: 'Radio Waves',
          libraryName: 'RadioWavesIcon'
        },
        {
          name: 'quote-icon',
          readableName: 'Quote',
          libraryName: 'QuoteIcon'
        },
        {
          name: 'record-icon',
          readableName: 'Record',
          libraryName: 'RecordIcon'
        },
        {
          name: 'reply-all-icon',
          readableName: 'Reply All',
          libraryName: 'ReplyAllIcon'
        },
        {
          name: 'reply-icon',
          readableName: 'Reply',
          libraryName: 'ReplyIcon'
        },
        {
          name: 'refresh-icon',
          readableName: 'Refresh',
          libraryName: 'RefreshIcon'
        },
        {
          name: 'ribbon-a-icon',
          readableName: 'Ribbon A',
          libraryName: 'RibbonAIcon'
        },
        {
          name: 'sad-outline-icon',
          readableName: 'Sad Outline',
          libraryName: 'SadOutlineIcon'
        },
        {
          name: 'ribbon-b-icon',
          readableName: 'Ribbon B',
          libraryName: 'RibbonBIcon'
        },
        {
          name: 'scissors-icon',
          readableName: 'Scissors',
          libraryName: 'ScissorsIcon'
        },
        {
          name: 'search-icon',
          readableName: 'Search',
          libraryName: 'SearchIcon'
        },
        {
          name: 'sad-icon',
          readableName: 'Sad',
          libraryName: 'SadIcon'
        },
        {
          name: 'settings-icon',
          readableName: 'Settings',
          libraryName: 'SettingsIcon'
        },
        {
          name: 'share-icon',
          readableName: 'Share',
          libraryName: 'ShareIcon'
        },
        {
          name: 'shuffle-icon',
          readableName: 'Shuffle',
          libraryName: 'ShuffleIcon'
        },
        {
          name: 'skip-forward-icon',
          readableName: 'Skip Forward',
          libraryName: 'SkipForwardIcon'
        },
        {
          name: 'skip-backward-icon',
          readableName: 'Skip Backward',
          libraryName: 'SkipBackwardIcon'
        },
        {
          name: 'social-android-outline-icon',
          readableName: 'Social Android Outline',
          libraryName: 'SocialAndroidOutlineIcon'
        },
        {
          name: 'social-angular-outline-icon',
          readableName: 'Social Angular Outline',
          libraryName: 'SocialAngularOutlineIcon'
        },
        {
          name: 'social-android-icon',
          readableName: 'Social Android',
          libraryName: 'SocialAndroidIcon'
        },
        {
          name: 'social-angular-icon',
          readableName: 'Social Angular',
          libraryName: 'SocialAngularIcon'
        },
        {
          name: 'social-apple-icon',
          readableName: 'Social Apple',
          libraryName: 'SocialAppleIcon'
        },
        {
          name: 'social-bitcoin-outline-icon',
          readableName: 'Social Bitcoin Outline',
          libraryName: 'SocialBitcoinOutlineIcon'
        },
        {
          name: 'social-apple-outline-icon',
          readableName: 'Social Apple Outline',
          libraryName: 'SocialAppleOutlineIcon'
        },
        {
          name: 'social-bitcoin-icon',
          readableName: 'Social Bitcoin',
          libraryName: 'SocialBitcoinIcon'
        },
        {
          name: 'social-buffer-outline-icon',
          readableName: 'Social Buffer Outline',
          libraryName: 'SocialBufferOutlineIcon'
        },
        {
          name: 'social-buffer-icon',
          readableName: 'Social Buffer',
          libraryName: 'SocialBufferIcon'
        },
        {
          name: 'social-chrome-outline-icon',
          readableName: 'Social Chrome Outline',
          libraryName: 'SocialChromeOutlineIcon'
        },
        {
          name: 'social-chrome-icon',
          readableName: 'Social Chrome',
          libraryName: 'SocialChromeIcon'
        },
        {
          name: 'social-codepen-outline-icon',
          readableName: 'Social Codepen Outline',
          libraryName: 'SocialCodepenOutlineIcon'
        },
        {
          name: 'social-codepen-icon',
          readableName: 'Social Codepen',
          libraryName: 'SocialCodepenIcon'
        },
        {
          name: 'social-css3-outline-icon',
          readableName: 'Social Css3 Outline',
          libraryName: 'SocialCss3OutlineIcon'
        },
        {
          name: 'social-css3-icon',
          readableName: 'Social Css3',
          libraryName: 'SocialCss3Icon'
        },
        {
          name: 'social-designernews-outline-icon',
          readableName: 'Social Designernews Outline',
          libraryName: 'SocialDesignernewsOutlineIcon'
        },
        {
          name: 'social-dribbble-outline-icon',
          readableName: 'Social Dribbble Outline',
          libraryName: 'SocialDribbbleOutlineIcon'
        },
        {
          name: 'social-dribbble-icon',
          readableName: 'Social Dribbble',
          libraryName: 'SocialDribbbleIcon'
        },
        {
          name: 'social-designernews-icon',
          readableName: 'Social Designernews',
          libraryName: 'SocialDesignernewsIcon'
        },
        {
          name: 'social-dropbox-outline-icon',
          readableName: 'Social Dropbox Outline',
          libraryName: 'SocialDropboxOutlineIcon'
        },
        {
          name: 'social-dropbox-icon',
          readableName: 'Social Dropbox',
          libraryName: 'SocialDropboxIcon'
        },
        {
          name: 'social-euro-outline-icon',
          readableName: 'Social Euro Outline',
          libraryName: 'SocialEuroOutlineIcon'
        },
        {
          name: 'social-euro-icon',
          readableName: 'Social Euro',
          libraryName: 'SocialEuroIcon'
        },
        {
          name: 'social-facebook-outline-icon',
          readableName: 'Social Facebook Outline',
          libraryName: 'SocialFacebookOutlineIcon'
        },
        {
          name: 'social-facebook-icon',
          readableName: 'Social Facebook',
          libraryName: 'SocialFacebookIcon'
        },
        {
          name: 'social-foursquare-outline-icon',
          readableName: 'Social Foursquare Outline',
          libraryName: 'SocialFoursquareOutlineIcon'
        },
        {
          name: 'social-foursquare-icon',
          readableName: 'Social Foursquare',
          libraryName: 'SocialFoursquareIcon'
        },
        {
          name: 'social-freebsd-devil-icon',
          readableName: 'Social Freebsd Devil',
          libraryName: 'SocialFreebsdDevilIcon'
        },
        {
          name: 'social-github-outline-icon',
          readableName: 'Social Github Outline',
          libraryName: 'SocialGithubOutlineIcon'
        },
        {
          name: 'social-github-icon',
          readableName: 'Social Github',
          libraryName: 'SocialGithubIcon'
        },
        {
          name: 'social-google-outline-icon',
          readableName: 'Social Google Outline',
          libraryName: 'SocialGoogleOutlineIcon'
        },
        {
          name: 'social-google-icon',
          readableName: 'Social Google',
          libraryName: 'SocialGoogleIcon'
        },
        {
          name: 'social-googleplus-outline-icon',
          readableName: 'Social Googleplus Outline',
          libraryName: 'SocialGoogleplusOutlineIcon'
        },
        {
          name: 'social-googleplus-icon',
          readableName: 'Social Googleplus',
          libraryName: 'SocialGoogleplusIcon'
        },
        {
          name: 'social-hackernews-outline-icon',
          readableName: 'Social Hackernews Outline',
          libraryName: 'SocialHackernewsOutlineIcon'
        },
        {
          name: 'social-hackernews-icon',
          readableName: 'Social Hackernews',
          libraryName: 'SocialHackernewsIcon'
        },
        {
          name: 'social-html5-outline-icon',
          readableName: 'Social Html5 Outline',
          libraryName: 'SocialHtml5OutlineIcon'
        },
        {
          name: 'social-html5-icon',
          readableName: 'Social Html5',
          libraryName: 'SocialHtml5Icon'
        },
        {
          name: 'social-instagram-outline-icon',
          readableName: 'Social Instagram Outline',
          libraryName: 'SocialInstagramOutlineIcon'
        },
        {
          name: 'social-instagram-icon',
          readableName: 'Social Instagram',
          libraryName: 'SocialInstagramIcon'
        },
        {
          name: 'social-javascript-outline-icon',
          readableName: 'Social Javascript Outline',
          libraryName: 'SocialJavascriptOutlineIcon'
        },
        {
          name: 'social-javascript-icon',
          readableName: 'Social Javascript',
          libraryName: 'SocialJavascriptIcon'
        },
        {
          name: 'social-linkedin-outline-icon',
          readableName: 'Social Linkedin Outline',
          libraryName: 'SocialLinkedinOutlineIcon'
        },
        {
          name: 'social-linkedin-icon',
          readableName: 'Social Linkedin',
          libraryName: 'SocialLinkedinIcon'
        },
        {
          name: 'social-markdown-icon',
          readableName: 'Social Markdown',
          libraryName: 'SocialMarkdownIcon'
        },
        {
          name: 'social-nodejs-icon',
          readableName: 'Social Nodejs',
          libraryName: 'SocialNodejsIcon'
        },
        {
          name: 'social-octocat-icon',
          readableName: 'Social Octocat',
          libraryName: 'SocialOctocatIcon'
        },
        {
          name: 'social-pinterest-icon',
          readableName: 'Social Pinterest',
          libraryName: 'SocialPinterestIcon'
        },
        {
          name: 'social-pinterest-outline-icon',
          readableName: 'Social Pinterest Outline',
          libraryName: 'SocialPinterestOutlineIcon'
        },
        {
          name: 'social-python-icon',
          readableName: 'Social Python',
          libraryName: 'SocialPythonIcon'
        },
        {
          name: 'social-reddit-outline-icon',
          readableName: 'Social Reddit Outline',
          libraryName: 'SocialRedditOutlineIcon'
        },
        {
          name: 'social-reddit-icon',
          readableName: 'Social Reddit',
          libraryName: 'SocialRedditIcon'
        },
        {
          name: 'social-rss-icon',
          readableName: 'Social Rss',
          libraryName: 'SocialRssIcon'
        },
        {
          name: 'social-rss-outline-icon',
          readableName: 'Social Rss Outline',
          libraryName: 'SocialRssOutlineIcon'
        },
        {
          name: 'social-sass-icon',
          readableName: 'Social Sass',
          libraryName: 'SocialSassIcon'
        },
        {
          name: 'social-skype-outline-icon',
          readableName: 'Social Skype Outline',
          libraryName: 'SocialSkypeOutlineIcon'
        },
        {
          name: 'social-skype-icon',
          readableName: 'Social Skype',
          libraryName: 'SocialSkypeIcon'
        },
        {
          name: 'social-snapchat-outline-icon',
          readableName: 'Social Snapchat Outline',
          libraryName: 'SocialSnapchatOutlineIcon'
        },
        {
          name: 'social-snapchat-icon',
          readableName: 'Social Snapchat',
          libraryName: 'SocialSnapchatIcon'
        },
        {
          name: 'social-tumblr-outline-icon',
          readableName: 'Social Tumblr Outline',
          libraryName: 'SocialTumblrOutlineIcon'
        },
        {
          name: 'social-tumblr-icon',
          readableName: 'Social Tumblr',
          libraryName: 'SocialTumblrIcon'
        },
        {
          name: 'social-twitch-outline-icon',
          readableName: 'Social Twitch Outline',
          libraryName: 'SocialTwitchOutlineIcon'
        },
        {
          name: 'social-tux-icon',
          readableName: 'Social Tux',
          libraryName: 'SocialTuxIcon'
        },
        {
          name: 'social-twitch-icon',
          readableName: 'Social Twitch',
          libraryName: 'SocialTwitchIcon'
        },
        {
          name: 'social-twitter-outline-icon',
          readableName: 'Social Twitter Outline',
          libraryName: 'SocialTwitterOutlineIcon'
        },
        {
          name: 'social-usd-outline-icon',
          readableName: 'Social Usd Outline',
          libraryName: 'SocialUsdOutlineIcon'
        },
        {
          name: 'social-usd-icon',
          readableName: 'Social Usd',
          libraryName: 'SocialUsdIcon'
        },
        {
          name: 'social-twitter-icon',
          readableName: 'Social Twitter',
          libraryName: 'SocialTwitterIcon'
        },
        {
          name: 'social-vimeo-outline-icon',
          readableName: 'Social Vimeo Outline',
          libraryName: 'SocialVimeoOutlineIcon'
        },
        {
          name: 'social-vimeo-icon',
          readableName: 'Social Vimeo',
          libraryName: 'SocialVimeoIcon'
        },
        {
          name: 'social-whatsapp-outline-icon',
          readableName: 'Social Whatsapp Outline',
          libraryName: 'SocialWhatsappOutlineIcon'
        },
        {
          name: 'social-whatsapp-icon',
          readableName: 'Social Whatsapp',
          libraryName: 'SocialWhatsappIcon'
        },
        {
          name: 'social-windows-outline-icon',
          readableName: 'Social Windows Outline',
          libraryName: 'SocialWindowsOutlineIcon'
        },
        {
          name: 'social-windows-icon',
          readableName: 'Social Windows',
          libraryName: 'SocialWindowsIcon'
        },
        {
          name: 'social-wordpress-outline-icon',
          readableName: 'Social Wordpress Outline',
          libraryName: 'SocialWordpressOutlineIcon'
        },
        {
          name: 'social-wordpress-icon',
          readableName: 'Social Wordpress',
          libraryName: 'SocialWordpressIcon'
        },
        {
          name: 'social-yahoo-outline-icon',
          readableName: 'Social Yahoo Outline',
          libraryName: 'SocialYahooOutlineIcon'
        },
        {
          name: 'social-yahoo-icon',
          readableName: 'Social Yahoo',
          libraryName: 'SocialYahooIcon'
        },
        {
          name: 'social-yen-outline-icon',
          readableName: 'Social Yen Outline',
          libraryName: 'SocialYenOutlineIcon'
        },
        {
          name: 'social-yen-icon',
          readableName: 'Social Yen',
          libraryName: 'SocialYenIcon'
        },
        {
          name: 'social-youtube-outline-icon',
          readableName: 'Social Youtube Outline',
          libraryName: 'SocialYoutubeOutlineIcon'
        },
        {
          name: 'soup-can-outline-icon',
          readableName: 'Soup Can Outline',
          libraryName: 'SoupCanOutlineIcon'
        },
        {
          name: 'social-youtube-icon',
          readableName: 'Social Youtube',
          libraryName: 'SocialYoutubeIcon'
        },
        {
          name: 'soup-can-icon',
          readableName: 'Soup Can',
          libraryName: 'SoupCanIcon'
        },
        {
          name: 'speakerphone-icon',
          readableName: 'Speakerphone',
          libraryName: 'SpeakerphoneIcon'
        },
        {
          name: 'speedometer-icon',
          readableName: 'Speedometer',
          libraryName: 'SpeedometerIcon'
        },
        {
          name: 'star-icon',
          readableName: 'Star',
          libraryName: 'StarIcon'
        },
        {
          name: 'stats-bars-icon',
          readableName: 'Stats Bars',
          libraryName: 'StatsBarsIcon'
        },
        {
          name: 'steam-icon',
          readableName: 'Steam',
          libraryName: 'SteamIcon'
        },
        {
          name: 'spoon-icon',
          readableName: 'Spoon',
          libraryName: 'SpoonIcon'
        },
        {
          name: 'stop-icon',
          readableName: 'Stop',
          libraryName: 'StopIcon'
        },
        {
          name: 'thermometer-icon',
          readableName: 'Thermometer',
          libraryName: 'ThermometerIcon'
        },
        {
          name: 'thumbsdown-icon',
          readableName: 'Thumbsdown',
          libraryName: 'ThumbsdownIcon'
        },
        {
          name: 'thumbsup-icon',
          readableName: 'Thumbsup',
          libraryName: 'ThumbsupIcon'
        },
        {
          name: 'toggle-icon',
          readableName: 'Toggle',
          libraryName: 'ToggleIcon'
        },
        {
          name: 'toggle-filled-icon',
          readableName: 'Toggle Filled',
          libraryName: 'ToggleFilledIcon'
        },
        {
          name: 'transgender-icon',
          readableName: 'Transgender',
          libraryName: 'TransgenderIcon'
        },
        {
          name: 'trash-a-icon',
          readableName: 'Trash A',
          libraryName: 'TrashAIcon'
        },
        {
          name: 'trash-b-icon',
          readableName: 'Trash B',
          libraryName: 'TrashBIcon'
        },
        {
          name: 'trophy-icon',
          readableName: 'Trophy',
          libraryName: 'TrophyIcon'
        },
        {
          name: 'tshirt-outline-icon',
          readableName: 'Tshirt Outline',
          libraryName: 'TshirtOutlineIcon'
        },
        {
          name: 'umbrella-icon',
          readableName: 'Umbrella',
          libraryName: 'UmbrellaIcon'
        },
        {
          name: 'tshirt-icon',
          readableName: 'Tshirt',
          libraryName: 'TshirtIcon'
        },
        {
          name: 'upload-icon',
          readableName: 'Upload',
          libraryName: 'UploadIcon'
        },
        {
          name: 'university-icon',
          readableName: 'University',
          libraryName: 'UniversityIcon'
        },
        {
          name: 'unlocked-icon',
          readableName: 'Unlocked',
          libraryName: 'UnlockedIcon'
        },
        {
          name: 'usb-icon',
          readableName: 'Usb',
          libraryName: 'UsbIcon'
        },
        {
          name: 'volume-low-icon',
          readableName: 'Volume Low',
          libraryName: 'VolumeLowIcon'
        },
        {
          name: 'volume-high-icon',
          readableName: 'Volume High',
          libraryName: 'VolumeHighIcon'
        },
        {
          name: 'videocamera-icon',
          readableName: 'Videocamera',
          libraryName: 'VideocameraIcon'
        },
        {
          name: 'volume-medium-icon',
          readableName: 'Volume Medium',
          libraryName: 'VolumeMediumIcon'
        },
        {
          name: 'waterdrop-icon',
          readableName: 'Waterdrop',
          libraryName: 'WaterdropIcon'
        },
        {
          name: 'wand-icon',
          readableName: 'Wand',
          libraryName: 'WandIcon'
        },
        {
          name: 'wifi-icon',
          readableName: 'Wifi',
          libraryName: 'WifiIcon'
        },
        {
          name: 'volume-mute-icon',
          readableName: 'Volume Mute',
          libraryName: 'VolumeMuteIcon'
        },
        {
          name: 'wineglass-icon',
          readableName: 'Wineglass',
          libraryName: 'WineglassIcon'
        },
        {
          name: 'wrench-icon',
          readableName: 'Wrench',
          libraryName: 'WrenchIcon'
        },
        {
          name: 'xbox-icon',
          readableName: 'Xbox',
          libraryName: 'XboxIcon'
        },
        {
          name: 'woman-icon',
          readableName: 'Woman',
          libraryName: 'WomanIcon'
        },
      ]
    }
  },
  computed: {
    filteredIcon() {
      if (this.searchText !== '') {
        return this.icons.filter(icon =>
          icon.readableName.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0
        )
      } else return this.icons
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

small{
  display: block;
  color: #ddd;
  font-size: 16px;
}

.grid__row { *zoom: 1; margin: 0 auto; max-width: 92.308em; }
.grid__row:before, .grid__row:after { display: table; content: ' '; }
.grid__row:after { clear: both; }
.centered { text-align: center; }


.box{
  position: relative;
  float: left;
  width: 10%;
  cursor: pointer;
  margin: 1px;
  padding: 7px 0 3px 0;
  text-align: center;
  border: 1px solid #ddd;

  &-content{
    position: absolute;
    opacity: 0;
    visibility: hidden;
    background-color: #1a1a1a;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 1em 2em;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -75px;
  }

  &:hover {
    	.box-content{
		    visibility: visible;
		    opacity: 1;
    	}
	}
}

.ion{
  &:hover{
    fill: #4F8EF7;
  }
}

.search{
  &__box{
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
  }
  &__input{
    padding: 1em 5em;
    margin-right: .5em;
    outline: 0;
    border: 1px solid #ddd;
  }
  &__btn{
    background-color: #4F8EF7;
    color: #fff;
    padding: 1em;
    outline: 0;
    border: 1px solid #4F8EF7;
    border-radius: .25em;
    cursor: pointer;
    display: flex;

    .ion{
      fill: #fff;

      &:hover{
        fill: #fff;
      }
    }
  }
}
</style>


