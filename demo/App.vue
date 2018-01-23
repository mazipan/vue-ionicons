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
      <h1>{{ msg }}</h1>

      <div class="grid__row">
          <div class="box">
            <AndroidAddCircleIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidAddCircleIcon
            </div>
          </div>
          <div class="box">
            <AlertCircledIcon :w="w" :h="h"/>

            <div class="box-content">
              AlertCircledIcon
            </div>
          </div>
          <div class="box">
            <AlertIcon :w="w" :h="h"/>

            <div class="box-content">
              AlertIcon
            </div>
          </div>
          <div class="box">
            <AndroidAddIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidAddIcon
            </div>
          </div>
          <div class="box">
            <AndroidAlarmClockIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidAlarmClockIcon
            </div>
          </div>
          <div class="box">
            <AndroidAlertIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidAlertIcon
            </div>
          </div>
          <div class="box">
            <AndroidAppsIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidAppsIcon
            </div>
          </div>
          <div class="box">
            <AndroidArchiveIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArchiveIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowDownIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowDownIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowBackIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowBackIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowDropdownIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowDropdownIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowDropleftCircleIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowDropleftCircleIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowDropdownCircleIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowDropdownCircleIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowDropleftIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowDropleftIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowDroprightCircleIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowDroprightCircleIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowDroprightIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowDroprightIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowDropupCircleIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowDropupCircleIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowDropupIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowDropupIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowForwardIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowForwardIcon
            </div>
          </div>
          <div class="box">
            <AndroidArrowUpIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidArrowUpIcon
            </div>
          </div>
          <div class="box">
            <AndroidAttachIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidAttachIcon
            </div>
          </div>
          <div class="box">
            <AndroidBicycleIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidBicycleIcon
            </div>
          </div>
          <div class="box">
            <AndroidBarIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidBarIcon
            </div>
          </div>
          <div class="box">
            <AndroidBoatIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidBoatIcon
            </div>
          </div>
          <div class="box">
            <AndroidBookmarkIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidBookmarkIcon
            </div>
          </div>
          <div class="box">
            <AndroidBulbIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidBulbIcon
            </div>
          </div>
          <div class="box">
            <AndroidCalendarIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCalendarIcon
            </div>
          </div>
          <div class="box">
            <AndroidBusIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidBusIcon
            </div>
          </div>
          <div class="box">
            <AndroidCallIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCallIcon
            </div>
          </div>
          <div class="box">
            <AndroidCameraIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCameraIcon
            </div>
          </div>
          <div class="box">
            <AndroidCancelIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCancelIcon
            </div>
          </div>
          <div class="box">
            <AndroidCarIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCarIcon
            </div>
          </div>
          <div class="box">
            <AndroidCartIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCartIcon
            </div>
          </div>
          <div class="box">
            <AndroidChatIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidChatIcon
            </div>
          </div>
          <div class="box">
            <AndroidCheckboxBlankIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCheckboxBlankIcon
            </div>
          </div>
          <div class="box">
            <AndroidCheckboxOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCheckboxOutlineIcon
            </div>
          </div>
          <div class="box">
            <AndroidCheckboxOutlineBlankIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCheckboxOutlineBlankIcon
            </div>
          </div>
          <div class="box">
            <AndroidCheckmarkCircleIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCheckmarkCircleIcon
            </div>
          </div>
          <div class="box">
            <AndroidClipboardIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidClipboardIcon
            </div>
          </div>
          <div class="box">
            <AndroidCloseIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCloseIcon
            </div>
          </div>
          <div class="box">
            <AndroidCheckboxIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCheckboxIcon
            </div>
          </div>
          <div class="box">
            <AndroidCloudCircleIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCloudCircleIcon
            </div>
          </div>
          <div class="box">
            <AndroidCloudDoneIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCloudDoneIcon
            </div>
          </div>
          <div class="box">
            <AndroidCloudOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCloudOutlineIcon
            </div>
          </div>
          <div class="box">
            <AndroidCloudIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCloudIcon
            </div>
          </div>
          <div class="box">
            <AndroidColorPaletteIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidColorPaletteIcon
            </div>
          </div>
          <div class="box">
            <AndroidCompassIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCompassIcon
            </div>
          </div>
          <div class="box">
            <AndroidContactsIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidContactsIcon
            </div>
          </div>
          <div class="box">
            <AndroidCreateIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidCreateIcon
            </div>
          </div>
          <div class="box">
            <AndroidContractIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidContractIcon
            </div>
          </div>
          <div class="box">
            <AndroidContactIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidContactIcon
            </div>
          </div>
          <div class="box">
            <AndroidDocumentIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidDocumentIcon
            </div>
          </div>
          <div class="box">
            <AndroidDeleteIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidDeleteIcon
            </div>
          </div>
          <div class="box">
            <AndroidDesktopIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidDesktopIcon
            </div>
          </div>
          <div class="box">
            <AndroidDoneAllIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidDoneAllIcon
            </div>
          </div>
          <div class="box">
            <AndroidDoneIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidDoneIcon
            </div>
          </div>
          <div class="box">
            <AndroidDownloadIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidDownloadIcon
            </div>
          </div>
          <div class="box">
            <AndroidDraftsIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidDraftsIcon
            </div>
          </div>
          <div class="box">
            <AndroidExitIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidExitIcon
            </div>
          </div>
          <div class="box">
            <AndroidExpandIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidExpandIcon
            </div>
          </div>
          <div class="box">
            <AndroidFavoriteOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidFavoriteOutlineIcon
            </div>
          </div>
          <div class="box">
            <AndroidFilmIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidFilmIcon
            </div>
          </div>
          <div class="box">
            <AndroidFavoriteIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidFavoriteIcon
            </div>
          </div>
          <div class="box">
            <AndroidFolderOpenIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidFolderOpenIcon
            </div>
          </div>
          <div class="box">
            <AndroidFunnelIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidFunnelIcon
            </div>
          </div>
          <div class="box">
            <AndroidHandIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidHandIcon
            </div>
          </div>
          <div class="box">
            <AndroidFolderIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidFolderIcon
            </div>
          </div>
          <div class="box">
            <AndroidGlobeIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidGlobeIcon
            </div>
          </div>
          <div class="box">
            <AndroidHangoutIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidHangoutIcon
            </div>
          </div>
          <div class="box">
            <AndroidHappyIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidHappyIcon
            </div>
          </div>
          <div class="box">
            <AndroidHomeIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidHomeIcon
            </div>
          </div>
          <div class="box">
            <AndroidImageIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidImageIcon
            </div>
          </div>
          <div class="box">
            <AndroidLaptopIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidLaptopIcon
            </div>
          </div>
          <div class="box">
            <AndroidListIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidListIcon
            </div>
          </div>
          <div class="box">
            <AndroidLocateIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidLocateIcon
            </div>
          </div>
          <div class="box">
            <AndroidMailIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidMailIcon
            </div>
          </div>
          <div class="box">
            <AndroidMenuIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidMenuIcon
            </div>
          </div>
          <div class="box">
            <AndroidMapIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidMapIcon
            </div>
          </div>
          <div class="box">
            <AndroidLockIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidLockIcon
            </div>
          </div>
          <div class="box">
            <AndroidMicrophoneIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidMicrophoneIcon
            </div>
          </div>
          <div class="box">
            <AndroidMoreVerticalIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidMoreVerticalIcon
            </div>
          </div>
          <div class="box">
            <AndroidMicrophoneOffIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidMicrophoneOffIcon
            </div>
          </div>
          <div class="box">
            <AndroidMoreHorizontalIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidMoreHorizontalIcon
            </div>
          </div>
          <div class="box">
            <AndroidNavigateIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidNavigateIcon
            </div>
          </div>
          <div class="box">
            <AndroidNotificationsOffIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidNotificationsOffIcon
            </div>
          </div>
          <div class="box">
            <AndroidNotificationsIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidNotificationsIcon
            </div>
          </div>
          <div class="box">
            <AndroidNotificationsNoneIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidNotificationsNoneIcon
            </div>
          </div>
          <div class="box">
            <AndroidOpenIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidOpenIcon
            </div>
          </div>
          <div class="box">
            <AndroidPersonAddIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidPersonAddIcon
            </div>
          </div>
          <div class="box">
            <AndroidOptionsIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidOptionsIcon
            </div>
          </div>
          <div class="box">
            <AndroidPersonIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidPersonIcon
            </div>
          </div>
          <div class="box">
            <AndroidPhoneLandscapeIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidPhoneLandscapeIcon
            </div>
          </div>
          <div class="box">
            <AndroidPeopleIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidPeopleIcon
            </div>
          </div>
          <div class="box">
            <AndroidPhonePortraitIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidPhonePortraitIcon
            </div>
          </div>
          <div class="box">
            <AndroidPinIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidPinIcon
            </div>
          </div>
          <div class="box">
            <AndroidPlaystoreIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidPlaystoreIcon
            </div>
          </div>
          <div class="box">
            <AndroidPlaneIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidPlaneIcon
            </div>
          </div>
          <div class="box">
            <AndroidPrintIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidPrintIcon
            </div>
          </div>
          <div class="box">
            <AndroidRadioButtonOnIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidRadioButtonOnIcon
            </div>
          </div>
          <div class="box">
            <AndroidRadioButtonOffIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidRadioButtonOffIcon
            </div>
          </div>
          <div class="box">
            <AndroidRefreshIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidRefreshIcon
            </div>
          </div>
          <div class="box">
            <AndroidRemoveCircleIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidRemoveCircleIcon
            </div>
          </div>
          <div class="box">
            <AndroidRemoveIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidRemoveIcon
            </div>
          </div>
          <div class="box">
            <AndroidRestaurantIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidRestaurantIcon
            </div>
          </div>
          <div class="box">
            <AndroidSearchIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidSearchIcon
            </div>
          </div>
          <div class="box">
            <AndroidSadIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidSadIcon
            </div>
          </div>
          <div class="box">
            <AndroidSettingsIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidSettingsIcon
            </div>
          </div>
          <div class="box">
            <AndroidSendIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidSendIcon
            </div>
          </div>
          <div class="box">
            <AndroidShareIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidShareIcon
            </div>
          </div>
          <div class="box">
            <AndroidShareAltIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidShareAltIcon
            </div>
          </div>
          <div class="box">
            <AndroidStarHalfIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidStarHalfIcon
            </div>
          </div>
          <div class="box">
            <AndroidStarOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidStarOutlineIcon
            </div>
          </div>
          <div class="box">
            <AndroidStarIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidStarIcon
            </div>
          </div>
          <div class="box">
            <AndroidStopwatchIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidStopwatchIcon
            </div>
          </div>
          <div class="box">
            <AndroidSunnyIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidSunnyIcon
            </div>
          </div>
          <div class="box">
            <AndroidSubwayIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidSubwayIcon
            </div>
          </div>
          <div class="box">
            <AndroidTextsmsIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidTextsmsIcon
            </div>
          </div>
          <div class="box">
            <AndroidSyncIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidSyncIcon
            </div>
          </div>
          <div class="box">
            <AndroidTimeIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidTimeIcon
            </div>
          </div>
          <div class="box">
            <AndroidTrainIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidTrainIcon
            </div>
          </div>
          <div class="box">
            <AndroidUnlockIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidUnlockIcon
            </div>
          </div>
          <div class="box">
            <AndroidUploadIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidUploadIcon
            </div>
          </div>
          <div class="box">
            <AndroidVolumeDownIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidVolumeDownIcon
            </div>
          </div>
          <div class="box">
            <AndroidVolumeMuteIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidVolumeMuteIcon
            </div>
          </div>
          <div class="box">
            <AndroidVolumeUpIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidVolumeUpIcon
            </div>
          </div>
          <div class="box">
            <AndroidVolumeOffIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidVolumeOffIcon
            </div>
          </div>
          <div class="box">
            <AndroidWalkIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidWalkIcon
            </div>
          </div>
          <div class="box">
            <AndroidWarningIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidWarningIcon
            </div>
          </div>
          <div class="box">
            <AndroidWatchIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidWatchIcon
            </div>
          </div>
          <div class="box">
            <AndroidWifiIcon :w="w" :h="h"/>

            <div class="box-content">
              AndroidWifiIcon
            </div>
          </div>
          <div class="box">
            <ApertureIcon :w="w" :h="h"/>

            <div class="box-content">
              ApertureIcon
            </div>
          </div>
          <div class="box">
            <ArchiveIcon :w="w" :h="h"/>

            <div class="box-content">
              ArchiveIcon
            </div>
          </div>
          <div class="box">
            <ArrowDownBIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowDownBIcon
            </div>
          </div>
          <div class="box">
            <ArrowDownCIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowDownCIcon
            </div>
          </div>
          <div class="box">
            <ArrowExpandIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowExpandIcon
            </div>
          </div>
          <div class="box">
            <ArrowDownAIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowDownAIcon
            </div>
          </div>
          <div class="box">
            <ArrowGraphDownLeftIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowGraphDownLeftIcon
            </div>
          </div>
          <div class="box">
            <ArrowGraphUpLeftIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowGraphUpLeftIcon
            </div>
          </div>
          <div class="box">
            <ArrowGraphDownRightIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowGraphDownRightIcon
            </div>
          </div>
          <div class="box">
            <ArrowGraphUpRightIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowGraphUpRightIcon
            </div>
          </div>
          <div class="box">
            <ArrowLeftAIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowLeftAIcon
            </div>
          </div>
          <div class="box">
            <ArrowLeftBIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowLeftBIcon
            </div>
          </div>
          <div class="box">
            <ArrowLeftCIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowLeftCIcon
            </div>
          </div>
          <div class="box">
            <ArrowMoveIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowMoveIcon
            </div>
          </div>
          <div class="box">
            <ArrowResizeIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowResizeIcon
            </div>
          </div>
          <div class="box">
            <ArrowReturnLeftIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowReturnLeftIcon
            </div>
          </div>
          <div class="box">
            <ArrowReturnRightIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowReturnRightIcon
            </div>
          </div>
          <div class="box">
            <ArrowRightAIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowRightAIcon
            </div>
          </div>
          <div class="box">
            <ArrowRightBIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowRightBIcon
            </div>
          </div>
          <div class="box">
            <ArrowRightCIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowRightCIcon
            </div>
          </div>
          <div class="box">
            <ArrowShrinkIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowShrinkIcon
            </div>
          </div>
          <div class="box">
            <ArrowSwapIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowSwapIcon
            </div>
          </div>
          <div class="box">
            <ArrowUpAIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowUpAIcon
            </div>
          </div>
          <div class="box">
            <ArrowUpBIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowUpBIcon
            </div>
          </div>
          <div class="box">
            <AsteriskIcon :w="w" :h="h"/>

            <div class="box-content">
              AsteriskIcon
            </div>
          </div>
          <div class="box">
            <BackspaceOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              BackspaceOutlineIcon
            </div>
          </div>
          <div class="box">
            <ArrowUpCIcon :w="w" :h="h"/>

            <div class="box-content">
              ArrowUpCIcon
            </div>
          </div>
          <div class="box">
            <AtIcon :w="w" :h="h"/>

            <div class="box-content">
              AtIcon
            </div>
          </div>
          <div class="box">
            <BagIcon :w="w" :h="h"/>

            <div class="box-content">
              BagIcon
            </div>
          </div>
          <div class="box">
            <BackspaceIcon :w="w" :h="h"/>

            <div class="box-content">
              BackspaceIcon
            </div>
          </div>
          <div class="box">
            <BatteryChargingIcon :w="w" :h="h"/>

            <div class="box-content">
              BatteryChargingIcon
            </div>
          </div>
          <div class="box">
            <BatteryEmptyIcon :w="w" :h="h"/>

            <div class="box-content">
              BatteryEmptyIcon
            </div>
          </div>
          <div class="box">
            <BatteryFullIcon :w="w" :h="h"/>

            <div class="box-content">
              BatteryFullIcon
            </div>
          </div>
          <div class="box">
            <BatteryLowIcon :w="w" :h="h"/>

            <div class="box-content">
              BatteryLowIcon
            </div>
          </div>
          <div class="box">
            <BeakerIcon :w="w" :h="h"/>

            <div class="box-content">
              BeakerIcon
            </div>
          </div>
          <div class="box">
            <BatteryHalfIcon :w="w" :h="h"/>

            <div class="box-content">
              BatteryHalfIcon
            </div>
          </div>
          <div class="box">
            <BluetoothIcon :w="w" :h="h"/>

            <div class="box-content">
              BluetoothIcon
            </div>
          </div>
          <div class="box">
            <BeerIcon :w="w" :h="h"/>

            <div class="box-content">
              BeerIcon
            </div>
          </div>
          <div class="box">
            <BonfireIcon :w="w" :h="h"/>

            <div class="box-content">
              BonfireIcon
            </div>
          </div>
          <div class="box">
            <BookmarkIcon :w="w" :h="h"/>

            <div class="box-content">
              BookmarkIcon
            </div>
          </div>
          <div class="box">
            <BriefcaseIcon :w="w" :h="h"/>

            <div class="box-content">
              BriefcaseIcon
            </div>
          </div>
          <div class="box">
            <CalculatorIcon :w="w" :h="h"/>

            <div class="box-content">
              CalculatorIcon
            </div>
          </div>
          <div class="box">
            <BugIcon :w="w" :h="h"/>

            <div class="box-content">
              BugIcon
            </div>
          </div>
          <div class="box">
            <CameraIcon :w="w" :h="h"/>

            <div class="box-content">
              CameraIcon
            </div>
          </div>
          <div class="box">
            <BowtieIcon :w="w" :h="h"/>

            <div class="box-content">
              BowtieIcon
            </div>
          </div>
          <div class="box">
            <CalendarIcon :w="w" :h="h"/>

            <div class="box-content">
              CalendarIcon
            </div>
          </div>
          <div class="box">
            <CardIcon :w="w" :h="h"/>

            <div class="box-content">
              CardIcon
            </div>
          </div>
          <div class="box">
            <CashIcon :w="w" :h="h"/>

            <div class="box-content">
              CashIcon
            </div>
          </div>
          <div class="box">
            <ChatboxesIcon :w="w" :h="h"/>

            <div class="box-content">
              ChatboxesIcon
            </div>
          </div>
          <div class="box">
            <ChatboxWorkingIcon :w="w" :h="h"/>

            <div class="box-content">
              ChatboxWorkingIcon
            </div>
          </div>
          <div class="box">
            <ChatboxIcon :w="w" :h="h"/>

            <div class="box-content">
              ChatboxIcon
            </div>
          </div>
          <div class="box">
            <ChatbubbleWorkingIcon :w="w" :h="h"/>

            <div class="box-content">
              ChatbubbleWorkingIcon
            </div>
          </div>
          <div class="box">
            <ChatbubbleIcon :w="w" :h="h"/>

            <div class="box-content">
              ChatbubbleIcon
            </div>
          </div>
          <div class="box">
            <CheckmarkCircledIcon :w="w" :h="h"/>

            <div class="box-content">
              CheckmarkCircledIcon
            </div>
          </div>
          <div class="box">
            <ChatbubblesIcon :w="w" :h="h"/>

            <div class="box-content">
              ChatbubblesIcon
            </div>
          </div>
          <div class="box">
            <CheckmarkRoundIcon :w="w" :h="h"/>

            <div class="box-content">
              CheckmarkRoundIcon
            </div>
          </div>
          <div class="box">
            <CheckmarkIcon :w="w" :h="h"/>

            <div class="box-content">
              CheckmarkIcon
            </div>
          </div>
          <div class="box">
            <ChevronDownIcon :w="w" :h="h"/>

            <div class="box-content">
              ChevronDownIcon
            </div>
          </div>
          <div class="box">
            <ChevronLeftIcon :w="w" :h="h"/>

            <div class="box-content">
              ChevronLeftIcon
            </div>
          </div>
          <div class="box">
            <ChevronRightIcon :w="w" :h="h"/>

            <div class="box-content">
              ChevronRightIcon
            </div>
          </div>
          <div class="box">
            <ClockIcon :w="w" :h="h"/>

            <div class="box-content">
              ClockIcon
            </div>
          </div>
          <div class="box">
            <ChevronUpIcon :w="w" :h="h"/>

            <div class="box-content">
              ChevronUpIcon
            </div>
          </div>
          <div class="box">
            <ClipboardIcon :w="w" :h="h"/>

            <div class="box-content">
              ClipboardIcon
            </div>
          </div>
          <div class="box">
            <CloseCircledIcon :w="w" :h="h"/>

            <div class="box-content">
              CloseCircledIcon
            </div>
          </div>
          <div class="box">
            <CloseRoundIcon :w="w" :h="h"/>

            <div class="box-content">
              CloseRoundIcon
            </div>
          </div>
          <div class="box">
            <CloseIcon :w="w" :h="h"/>

            <div class="box-content">
              CloseIcon
            </div>
          </div>
          <div class="box">
            <CloudIcon :w="w" :h="h"/>

            <div class="box-content">
              CloudIcon
            </div>
          </div>
          <div class="box">
            <CodeDownloadIcon :w="w" :h="h"/>

            <div class="box-content">
              CodeDownloadIcon
            </div>
          </div>
          <div class="box">
            <ClosedCaptioningIcon :w="w" :h="h"/>

            <div class="box-content">
              ClosedCaptioningIcon
            </div>
          </div>
          <div class="box">
            <CodeWorkingIcon :w="w" :h="h"/>

            <div class="box-content">
              CodeWorkingIcon
            </div>
          </div>
          <div class="box">
            <CodeIcon :w="w" :h="h"/>

            <div class="box-content">
              CodeIcon
            </div>
          </div>
          <div class="box">
            <CoffeeIcon :w="w" :h="h"/>

            <div class="box-content">
              CoffeeIcon
            </div>
          </div>
          <div class="box">
            <CompassIcon :w="w" :h="h"/>

            <div class="box-content">
              CompassIcon
            </div>
          </div>
          <div class="box">
            <ComposeIcon :w="w" :h="h"/>

            <div class="box-content">
              ComposeIcon
            </div>
          </div>
          <div class="box">
            <ConnectionBarsIcon :w="w" :h="h"/>

            <div class="box-content">
              ConnectionBarsIcon
            </div>
          </div>
          <div class="box">
            <ContrastIcon :w="w" :h="h"/>

            <div class="box-content">
              ContrastIcon
            </div>
          </div>
          <div class="box">
            <CropIcon :w="w" :h="h"/>

            <div class="box-content">
              CropIcon
            </div>
          </div>
          <div class="box">
            <CubeIcon :w="w" :h="h"/>

            <div class="box-content">
              CubeIcon
            </div>
          </div>
          <div class="box">
            <DiscIcon :w="w" :h="h"/>

            <div class="box-content">
              DiscIcon
            </div>
          </div>
          <div class="box">
            <DocumentTextIcon :w="w" :h="h"/>

            <div class="box-content">
              DocumentTextIcon
            </div>
          </div>
          <div class="box">
            <DocumentIcon :w="w" :h="h"/>

            <div class="box-content">
              DocumentIcon
            </div>
          </div>
          <div class="box">
            <DragIcon :w="w" :h="h"/>

            <div class="box-content">
              DragIcon
            </div>
          </div>
          <div class="box">
            <EarthIcon :w="w" :h="h"/>

            <div class="box-content">
              EarthIcon
            </div>
          </div>
          <div class="box">
            <EaselIcon :w="w" :h="h"/>

            <div class="box-content">
              EaselIcon
            </div>
          </div>
          <div class="box">
            <EditIcon :w="w" :h="h"/>

            <div class="box-content">
              EditIcon
            </div>
          </div>
          <div class="box">
            <EjectIcon :w="w" :h="h"/>

            <div class="box-content">
              EjectIcon
            </div>
          </div>
          <div class="box">
            <EggIcon :w="w" :h="h"/>

            <div class="box-content">
              EggIcon
            </div>
          </div>
          <div class="box">
            <EmailUnreadIcon :w="w" :h="h"/>

            <div class="box-content">
              EmailUnreadIcon
            </div>
          </div>
          <div class="box">
            <EmailIcon :w="w" :h="h"/>

            <div class="box-content">
              EmailIcon
            </div>
          </div>
          <div class="box">
            <ErlenmeyerFlaskBubblesIcon :w="w" :h="h"/>

            <div class="box-content">
              ErlenmeyerFlaskBubblesIcon
            </div>
          </div>
          <div class="box">
            <ErlenmeyerFlaskIcon :w="w" :h="h"/>

            <div class="box-content">
              ErlenmeyerFlaskIcon
            </div>
          </div>
          <div class="box">
            <EyeDisabledIcon :w="w" :h="h"/>

            <div class="box-content">
              EyeDisabledIcon
            </div>
          </div>
          <div class="box">
            <EyeIcon :w="w" :h="h"/>

            <div class="box-content">
              EyeIcon
            </div>
          </div>
          <div class="box">
            <FemaleIcon :w="w" :h="h"/>

            <div class="box-content">
              FemaleIcon
            </div>
          </div>
          <div class="box">
            <FilingIcon :w="w" :h="h"/>

            <div class="box-content">
              FilingIcon
            </div>
          </div>
          <div class="box">
            <FilmMarkerIcon :w="w" :h="h"/>

            <div class="box-content">
              FilmMarkerIcon
            </div>
          </div>
          <div class="box">
            <FireballIcon :w="w" :h="h"/>

            <div class="box-content">
              FireballIcon
            </div>
          </div>
          <div class="box">
            <FlagIcon :w="w" :h="h"/>

            <div class="box-content">
              FlagIcon
            </div>
          </div>
          <div class="box">
            <FlameIcon :w="w" :h="h"/>

            <div class="box-content">
              FlameIcon
            </div>
          </div>
          <div class="box">
            <FlashOffIcon :w="w" :h="h"/>

            <div class="box-content">
              FlashOffIcon
            </div>
          </div>
          <div class="box">
            <FlashIcon :w="w" :h="h"/>

            <div class="box-content">
              FlashIcon
            </div>
          </div>
          <div class="box">
            <FolderIcon :w="w" :h="h"/>

            <div class="box-content">
              FolderIcon
            </div>
          </div>
          <div class="box">
            <ForkRepoIcon :w="w" :h="h"/>

            <div class="box-content">
              ForkRepoIcon
            </div>
          </div>
          <div class="box">
            <ForkIcon :w="w" :h="h"/>

            <div class="box-content">
              ForkIcon
            </div>
          </div>
          <div class="box">
            <ForwardIcon :w="w" :h="h"/>

            <div class="box-content">
              ForwardIcon
            </div>
          </div>
          <div class="box">
            <FunnelIcon :w="w" :h="h"/>

            <div class="box-content">
              FunnelIcon
            </div>
          </div>
          <div class="box">
            <GearAIcon :w="w" :h="h"/>

            <div class="box-content">
              GearAIcon
            </div>
          </div>
          <div class="box">
            <GridIcon :w="w" :h="h"/>

            <div class="box-content">
              GridIcon
            </div>
          </div>
          <div class="box">
            <HammerIcon :w="w" :h="h"/>

            <div class="box-content">
              HammerIcon
            </div>
          </div>
          <div class="box">
            <GearBIcon :w="w" :h="h"/>

            <div class="box-content">
              GearBIcon
            </div>
          </div>
          <div class="box">
            <HappyIcon :w="w" :h="h"/>

            <div class="box-content">
              HappyIcon
            </div>
          </div>
          <div class="box">
            <HeadphoneIcon :w="w" :h="h"/>

            <div class="box-content">
              HeadphoneIcon
            </div>
          </div>
          <div class="box">
            <HappyOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              HappyOutlineIcon
            </div>
          </div>
          <div class="box">
            <HeartBrokenIcon :w="w" :h="h"/>

            <div class="box-content">
              HeartBrokenIcon
            </div>
          </div>
          <div class="box">
            <HeartIcon :w="w" :h="h"/>

            <div class="box-content">
              HeartIcon
            </div>
          </div>
          <div class="box">
            <HelpBuoyIcon :w="w" :h="h"/>

            <div class="box-content">
              HelpBuoyIcon
            </div>
          </div>
          <div class="box">
            <HelpCircledIcon :w="w" :h="h"/>

            <div class="box-content">
              HelpCircledIcon
            </div>
          </div>
          <div class="box">
            <HelpIcon :w="w" :h="h"/>

            <div class="box-content">
              HelpIcon
            </div>
          </div>
          <div class="box">
            <HomeIcon :w="w" :h="h"/>

            <div class="box-content">
              HomeIcon
            </div>
          </div>
          <div class="box">
            <IcecreamIcon :w="w" :h="h"/>

            <div class="box-content">
              IcecreamIcon
            </div>
          </div>
          <div class="box">
            <ImageIcon :w="w" :h="h"/>

            <div class="box-content">
              ImageIcon
            </div>
          </div>
          <div class="box">
            <ImagesIcon :w="w" :h="h"/>

            <div class="box-content">
              ImagesIcon
            </div>
          </div>
          <div class="box">
            <InformationCircledIcon :w="w" :h="h"/>

            <div class="box-content">
              InformationCircledIcon
            </div>
          </div>
          <div class="box">
            <InformationIcon :w="w" :h="h"/>

            <div class="box-content">
              InformationIcon
            </div>
          </div>
          <div class="box">
            <IonicIcon :w="w" :h="h"/>

            <div class="box-content">
              IonicIcon
            </div>
          </div>
          <div class="box">
            <IosAlarmOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosAlarmOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosAlarmIcon :w="w" :h="h"/>

            <div class="box-content">
              IosAlarmIcon
            </div>
          </div>
          <div class="box">
            <IosAlbumsOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosAlbumsOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosAlbumsIcon :w="w" :h="h"/>

            <div class="box-content">
              IosAlbumsIcon
            </div>
          </div>
          <div class="box">
            <IosAmericanfootballOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosAmericanfootballOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosAmericanfootballIcon :w="w" :h="h"/>

            <div class="box-content">
              IosAmericanfootballIcon
            </div>
          </div>
          <div class="box">
            <IosAnalyticsOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosAnalyticsOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosAnalyticsIcon :w="w" :h="h"/>

            <div class="box-content">
              IosAnalyticsIcon
            </div>
          </div>
          <div class="box">
            <IosArrowBackIcon :w="w" :h="h"/>

            <div class="box-content">
              IosArrowBackIcon
            </div>
          </div>
          <div class="box">
            <IosArrowDownIcon :w="w" :h="h"/>

            <div class="box-content">
              IosArrowDownIcon
            </div>
          </div>
          <div class="box">
            <IosArrowForwardIcon :w="w" :h="h"/>

            <div class="box-content">
              IosArrowForwardIcon
            </div>
          </div>
          <div class="box">
            <IosArrowLeftIcon :w="w" :h="h"/>

            <div class="box-content">
              IosArrowLeftIcon
            </div>
          </div>
          <div class="box">
            <IosArrowRightIcon :w="w" :h="h"/>

            <div class="box-content">
              IosArrowRightIcon
            </div>
          </div>
          <div class="box">
            <IosArrowThinDownIcon :w="w" :h="h"/>

            <div class="box-content">
              IosArrowThinDownIcon
            </div>
          </div>
          <div class="box">
            <IosArrowThinLeftIcon :w="w" :h="h"/>

            <div class="box-content">
              IosArrowThinLeftIcon
            </div>
          </div>
          <div class="box">
            <IosArrowThinRightIcon :w="w" :h="h"/>

            <div class="box-content">
              IosArrowThinRightIcon
            </div>
          </div>
          <div class="box">
            <IosArrowUpIcon :w="w" :h="h"/>

            <div class="box-content">
              IosArrowUpIcon
            </div>
          </div>
          <div class="box">
            <IosArrowThinUpIcon :w="w" :h="h"/>

            <div class="box-content">
              IosArrowThinUpIcon
            </div>
          </div>
          <div class="box">
            <IosAtOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosAtOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosAtIcon :w="w" :h="h"/>

            <div class="box-content">
              IosAtIcon
            </div>
          </div>
          <div class="box">
            <IosBarcodeOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBarcodeOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosBarcodeIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBarcodeIcon
            </div>
          </div>
          <div class="box">
            <IosBaseballOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBaseballOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosBaseballIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBaseballIcon
            </div>
          </div>
          <div class="box">
            <IosBasketballOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBasketballOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosBasketballIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBasketballIcon
            </div>
          </div>
          <div class="box">
            <IosBellOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBellOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosBellIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBellIcon
            </div>
          </div>
          <div class="box">
            <IosBodyOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBodyOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosBodyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBodyIcon
            </div>
          </div>
          <div class="box">
            <IosBoltOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBoltOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosBoltIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBoltIcon
            </div>
          </div>
          <div class="box">
            <IosBookOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBookOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosBookIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBookIcon
            </div>
          </div>
          <div class="box">
            <IosBookmarksOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBookmarksOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosBookmarksIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBookmarksIcon
            </div>
          </div>
          <div class="box">
            <IosBoxOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBoxOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosBoxIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBoxIcon
            </div>
          </div>
          <div class="box">
            <IosBriefcaseOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBriefcaseOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosBriefcaseIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBriefcaseIcon
            </div>
          </div>
          <div class="box">
            <IosBrowsersOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBrowsersOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosBrowsersIcon :w="w" :h="h"/>

            <div class="box-content">
              IosBrowsersIcon
            </div>
          </div>
          <div class="box">
            <IosCalculatorOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCalculatorOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCalculatorIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCalculatorIcon
            </div>
          </div>
          <div class="box">
            <IosCalendarOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCalendarOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCalendarIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCalendarIcon
            </div>
          </div>
          <div class="box">
            <IosCameraOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCameraOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCameraIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCameraIcon
            </div>
          </div>
          <div class="box">
            <IosCartOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCartOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCartIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCartIcon
            </div>
          </div>
          <div class="box">
            <IosChatboxesOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosChatboxesOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosChatboxesIcon :w="w" :h="h"/>

            <div class="box-content">
              IosChatboxesIcon
            </div>
          </div>
          <div class="box">
            <IosChatbubbleOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosChatbubbleOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosChatbubbleIcon :w="w" :h="h"/>

            <div class="box-content">
              IosChatbubbleIcon
            </div>
          </div>
          <div class="box">
            <IosCheckmarkEmptyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCheckmarkEmptyIcon
            </div>
          </div>
          <div class="box">
            <IosCheckmarkOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCheckmarkOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCheckmarkIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCheckmarkIcon
            </div>
          </div>
          <div class="box">
            <IosCircleFilledIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCircleFilledIcon
            </div>
          </div>
          <div class="box">
            <IosCircleOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCircleOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosClockOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosClockOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosClockIcon :w="w" :h="h"/>

            <div class="box-content">
              IosClockIcon
            </div>
          </div>
          <div class="box">
            <IosCloseEmptyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloseEmptyIcon
            </div>
          </div>
          <div class="box">
            <IosCloseOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloseOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCloseIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloseIcon
            </div>
          </div>
          <div class="box">
            <IosCloudDownloadOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloudDownloadOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCloudDownloadIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloudDownloadIcon
            </div>
          </div>
          <div class="box">
            <IosCloudOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloudOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCloudUploadOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloudUploadOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCloudUploadIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloudUploadIcon
            </div>
          </div>
          <div class="box">
            <IosCloudIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloudIcon
            </div>
          </div>
          <div class="box">
            <IosCloudyNightOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloudyNightOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCloudyNightIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloudyNightIcon
            </div>
          </div>
          <div class="box">
            <IosCloudyOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloudyOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCloudyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCloudyIcon
            </div>
          </div>
          <div class="box">
            <IosCogOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCogOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCogIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCogIcon
            </div>
          </div>
          <div class="box">
            <IosColorFilterOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosColorFilterOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosColorFilterIcon :w="w" :h="h"/>

            <div class="box-content">
              IosColorFilterIcon
            </div>
          </div>
          <div class="box">
            <IosColorWandOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosColorWandOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosColorWandIcon :w="w" :h="h"/>

            <div class="box-content">
              IosColorWandIcon
            </div>
          </div>
          <div class="box">
            <IosComposeOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosComposeOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosContactOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosContactOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosComposeIcon :w="w" :h="h"/>

            <div class="box-content">
              IosComposeIcon
            </div>
          </div>
          <div class="box">
            <IosContactIcon :w="w" :h="h"/>

            <div class="box-content">
              IosContactIcon
            </div>
          </div>
          <div class="box">
            <IosCopyOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCopyOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosCopyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCopyIcon
            </div>
          </div>
          <div class="box">
            <IosCropIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCropIcon
            </div>
          </div>
          <div class="box">
            <IosCropStrongIcon :w="w" :h="h"/>

            <div class="box-content">
              IosCropStrongIcon
            </div>
          </div>
          <div class="box">
            <IosDownloadOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosDownloadOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosDownloadIcon :w="w" :h="h"/>

            <div class="box-content">
              IosDownloadIcon
            </div>
          </div>
          <div class="box">
            <IosDragIcon :w="w" :h="h"/>

            <div class="box-content">
              IosDragIcon
            </div>
          </div>
          <div class="box">
            <IosEmailOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosEmailOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosEmailIcon :w="w" :h="h"/>

            <div class="box-content">
              IosEmailIcon
            </div>
          </div>
          <div class="box">
            <IosEyeOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosEyeOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosEyeIcon :w="w" :h="h"/>

            <div class="box-content">
              IosEyeIcon
            </div>
          </div>
          <div class="box">
            <IosFastforwardOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFastforwardOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosFastforwardIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFastforwardIcon
            </div>
          </div>
          <div class="box">
            <IosFilingOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFilingOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosFilingIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFilingIcon
            </div>
          </div>
          <div class="box">
            <IosFilmOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFilmOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosFilmIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFilmIcon
            </div>
          </div>
          <div class="box">
            <IosFlagOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFlagOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosFlagIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFlagIcon
            </div>
          </div>
          <div class="box">
            <IosFlameOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFlameOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosFlameIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFlameIcon
            </div>
          </div>
          <div class="box">
            <IosFlaskOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFlaskOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosFlaskIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFlaskIcon
            </div>
          </div>
          <div class="box">
            <IosFlowerOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFlowerOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosFlowerIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFlowerIcon
            </div>
          </div>
          <div class="box">
            <IosFolderOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFolderOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosFolderIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFolderIcon
            </div>
          </div>
          <div class="box">
            <IosFootballOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFootballOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosFootballIcon :w="w" :h="h"/>

            <div class="box-content">
              IosFootballIcon
            </div>
          </div>
          <div class="box">
            <IosGameControllerAOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosGameControllerAOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosGameControllerAIcon :w="w" :h="h"/>

            <div class="box-content">
              IosGameControllerAIcon
            </div>
          </div>
          <div class="box">
            <IosGameControllerBOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosGameControllerBOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosGameControllerBIcon :w="w" :h="h"/>

            <div class="box-content">
              IosGameControllerBIcon
            </div>
          </div>
          <div class="box">
            <IosGearOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosGearOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosGearIcon :w="w" :h="h"/>

            <div class="box-content">
              IosGearIcon
            </div>
          </div>
          <div class="box">
            <IosGlassesOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosGlassesOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosGlassesIcon :w="w" :h="h"/>

            <div class="box-content">
              IosGlassesIcon
            </div>
          </div>
          <div class="box">
            <IosGridViewOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosGridViewOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosGridViewIcon :w="w" :h="h"/>

            <div class="box-content">
              IosGridViewIcon
            </div>
          </div>
          <div class="box">
            <IosHeartOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosHeartOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosHeartIcon :w="w" :h="h"/>

            <div class="box-content">
              IosHeartIcon
            </div>
          </div>
          <div class="box">
            <IosHelpEmptyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosHelpEmptyIcon
            </div>
          </div>
          <div class="box">
            <IosHelpOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosHelpOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosHelpIcon :w="w" :h="h"/>

            <div class="box-content">
              IosHelpIcon
            </div>
          </div>
          <div class="box">
            <IosHomeOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosHomeOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosHomeIcon :w="w" :h="h"/>

            <div class="box-content">
              IosHomeIcon
            </div>
          </div>
          <div class="box">
            <IosInfiniteOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosInfiniteOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosInfiniteIcon :w="w" :h="h"/>

            <div class="box-content">
              IosInfiniteIcon
            </div>
          </div>
          <div class="box">
            <IosInformationEmptyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosInformationEmptyIcon
            </div>
          </div>
          <div class="box">
            <IosInformationOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosInformationOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosInformationIcon :w="w" :h="h"/>

            <div class="box-content">
              IosInformationIcon
            </div>
          </div>
          <div class="box">
            <IosIonicOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosIonicOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosKeypadOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosKeypadOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosKeypadIcon :w="w" :h="h"/>

            <div class="box-content">
              IosKeypadIcon
            </div>
          </div>
          <div class="box">
            <IosLightbulbOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosLightbulbOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosLightbulbIcon :w="w" :h="h"/>

            <div class="box-content">
              IosLightbulbIcon
            </div>
          </div>
          <div class="box">
            <IosListOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosListOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosListIcon :w="w" :h="h"/>

            <div class="box-content">
              IosListIcon
            </div>
          </div>
          <div class="box">
            <IosLocationOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosLocationOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosLocationIcon :w="w" :h="h"/>

            <div class="box-content">
              IosLocationIcon
            </div>
          </div>
          <div class="box">
            <IosLockedOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosLockedOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosLockedIcon :w="w" :h="h"/>

            <div class="box-content">
              IosLockedIcon
            </div>
          </div>
          <div class="box">
            <IosLoopStrongIcon :w="w" :h="h"/>

            <div class="box-content">
              IosLoopStrongIcon
            </div>
          </div>
          <div class="box">
            <IosMedicalOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMedicalOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosMedicalIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMedicalIcon
            </div>
          </div>
          <div class="box">
            <IosMedkitOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMedkitOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosLoopIcon :w="w" :h="h"/>

            <div class="box-content">
              IosLoopIcon
            </div>
          </div>
          <div class="box">
            <IosMedkitIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMedkitIcon
            </div>
          </div>
          <div class="box">
            <IosMicOffIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMicOffIcon
            </div>
          </div>
          <div class="box">
            <IosMicOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMicOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosMicIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMicIcon
            </div>
          </div>
          <div class="box">
            <IosMinusEmptyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMinusEmptyIcon
            </div>
          </div>
          <div class="box">
            <IosMinusOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMinusOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosMinusIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMinusIcon
            </div>
          </div>
          <div class="box">
            <IosMonitorOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMonitorOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosMonitorIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMonitorIcon
            </div>
          </div>
          <div class="box">
            <IosMoonOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMoonOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosMoonIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMoonIcon
            </div>
          </div>
          <div class="box">
            <IosMoreOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMoreOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosMoreIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMoreIcon
            </div>
          </div>
          <div class="box">
            <IosMusicalNoteIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMusicalNoteIcon
            </div>
          </div>
          <div class="box">
            <IosMusicalNotesIcon :w="w" :h="h"/>

            <div class="box-content">
              IosMusicalNotesIcon
            </div>
          </div>
          <div class="box">
            <IosNavigateOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosNavigateOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosNavigateIcon :w="w" :h="h"/>

            <div class="box-content">
              IosNavigateIcon
            </div>
          </div>
          <div class="box">
            <IosNutritionOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosNutritionOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosNutritionIcon :w="w" :h="h"/>

            <div class="box-content">
              IosNutritionIcon
            </div>
          </div>
          <div class="box">
            <IosPaperOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPaperOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPaperIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPaperIcon
            </div>
          </div>
          <div class="box">
            <IosPaperplaneOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPaperplaneOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPartlysunnyOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPartlysunnyOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPartlysunnyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPartlysunnyIcon
            </div>
          </div>
          <div class="box">
            <IosPauseOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPauseOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPauseIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPauseIcon
            </div>
          </div>
          <div class="box">
            <IosPaperplaneIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPaperplaneIcon
            </div>
          </div>
          <div class="box">
            <IosPawOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPawOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPeopleOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPeopleOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPawIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPawIcon
            </div>
          </div>
          <div class="box">
            <IosPersonIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPersonIcon
            </div>
          </div>
          <div class="box">
            <IosPersonaddOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPersonaddOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPersonOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPersonOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPersonaddIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPersonaddIcon
            </div>
          </div>
          <div class="box">
            <IosPhotosOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPhotosOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPeopleIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPeopleIcon
            </div>
          </div>
          <div class="box">
            <IosPhotosIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPhotosIcon
            </div>
          </div>
          <div class="box">
            <IosPieOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPieOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPieIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPieIcon
            </div>
          </div>
          <div class="box">
            <IosPintOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPintOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPintIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPintIcon
            </div>
          </div>
          <div class="box">
            <IosPlayIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPlayIcon
            </div>
          </div>
          <div class="box">
            <IosPlayOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPlayOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPlusOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPlusOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPlusEmptyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPlusEmptyIcon
            </div>
          </div>
          <div class="box">
            <IosPlusIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPlusIcon
            </div>
          </div>
          <div class="box">
            <IosPricetagOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPricetagOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPricetagIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPricetagIcon
            </div>
          </div>
          <div class="box">
            <IosPricetagsOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPricetagsOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPrinterOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPrinterOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPricetagsIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPricetagsIcon
            </div>
          </div>
          <div class="box">
            <IosPrinterIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPrinterIcon
            </div>
          </div>
          <div class="box">
            <IosPulseStrongIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPulseStrongIcon
            </div>
          </div>
          <div class="box">
            <IosRainyOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRainyOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosRainyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRainyIcon
            </div>
          </div>
          <div class="box">
            <IosRecordingOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRecordingOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosPulseIcon :w="w" :h="h"/>

            <div class="box-content">
              IosPulseIcon
            </div>
          </div>
          <div class="box">
            <IosRecordingIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRecordingIcon
            </div>
          </div>
          <div class="box">
            <IosRedoIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRedoIcon
            </div>
          </div>
          <div class="box">
            <IosRefreshEmptyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRefreshEmptyIcon
            </div>
          </div>
          <div class="box">
            <IosRedoOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRedoOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosRefreshIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRefreshIcon
            </div>
          </div>
          <div class="box">
            <IosReloadIcon :w="w" :h="h"/>

            <div class="box-content">
              IosReloadIcon
            </div>
          </div>
          <div class="box">
            <IosRefreshOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRefreshOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosReverseCameraIcon :w="w" :h="h"/>

            <div class="box-content">
              IosReverseCameraIcon
            </div>
          </div>
          <div class="box">
            <IosReverseCameraOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosReverseCameraOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosRewindIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRewindIcon
            </div>
          </div>
          <div class="box">
            <IosRewindOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRewindOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosRoseOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRoseOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosRoseIcon :w="w" :h="h"/>

            <div class="box-content">
              IosRoseIcon
            </div>
          </div>
          <div class="box">
            <IosSearchStrongIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSearchStrongIcon
            </div>
          </div>
          <div class="box">
            <IosSearchIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSearchIcon
            </div>
          </div>
          <div class="box">
            <IosSettingsStrongIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSettingsStrongIcon
            </div>
          </div>
          <div class="box">
            <IosSettingsIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSettingsIcon
            </div>
          </div>
          <div class="box">
            <IosShuffleStrongIcon :w="w" :h="h"/>

            <div class="box-content">
              IosShuffleStrongIcon
            </div>
          </div>
          <div class="box">
            <IosShuffleIcon :w="w" :h="h"/>

            <div class="box-content">
              IosShuffleIcon
            </div>
          </div>
          <div class="box">
            <IosSkipbackwardOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSkipbackwardOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosSkipbackwardIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSkipbackwardIcon
            </div>
          </div>
          <div class="box">
            <IosSkipforwardOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSkipforwardOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosSkipforwardIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSkipforwardIcon
            </div>
          </div>
          <div class="box">
            <IosSnowyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSnowyIcon
            </div>
          </div>
          <div class="box">
            <IosSpeedometerOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSpeedometerOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosSpeedometerIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSpeedometerIcon
            </div>
          </div>
          <div class="box">
            <IosStarHalfIcon :w="w" :h="h"/>

            <div class="box-content">
              IosStarHalfIcon
            </div>
          </div>
          <div class="box">
            <IosStarOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosStarOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosStarIcon :w="w" :h="h"/>

            <div class="box-content">
              IosStarIcon
            </div>
          </div>
          <div class="box">
            <IosStopwatchOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosStopwatchOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosStopwatchIcon :w="w" :h="h"/>

            <div class="box-content">
              IosStopwatchIcon
            </div>
          </div>
          <div class="box">
            <IosSunnyOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSunnyOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosSunnyIcon :w="w" :h="h"/>

            <div class="box-content">
              IosSunnyIcon
            </div>
          </div>
          <div class="box">
            <IosTelephoneOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosTelephoneOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosTelephoneIcon :w="w" :h="h"/>

            <div class="box-content">
              IosTelephoneIcon
            </div>
          </div>
          <div class="box">
            <IosTennisballOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosTennisballOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosTennisballIcon :w="w" :h="h"/>

            <div class="box-content">
              IosTennisballIcon
            </div>
          </div>
          <div class="box">
            <IosThunderstormOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosThunderstormOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosThunderstormIcon :w="w" :h="h"/>

            <div class="box-content">
              IosThunderstormIcon
            </div>
          </div>
          <div class="box">
            <IosTimeOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosTimeOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosTimeIcon :w="w" :h="h"/>

            <div class="box-content">
              IosTimeIcon
            </div>
          </div>
          <div class="box">
            <IosTimerOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosTimerOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosTimerIcon :w="w" :h="h"/>

            <div class="box-content">
              IosTimerIcon
            </div>
          </div>
          <div class="box">
            <IosToggleOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosToggleOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosToggleIcon :w="w" :h="h"/>

            <div class="box-content">
              IosToggleIcon
            </div>
          </div>
          <div class="box">
            <IosTrashOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosTrashOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosTrashIcon :w="w" :h="h"/>

            <div class="box-content">
              IosTrashIcon
            </div>
          </div>
          <div class="box">
            <IosUndoOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosUndoOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosUndoIcon :w="w" :h="h"/>

            <div class="box-content">
              IosUndoIcon
            </div>
          </div>
          <div class="box">
            <IosUnlockedOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosUnlockedOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosUnlockedIcon :w="w" :h="h"/>

            <div class="box-content">
              IosUnlockedIcon
            </div>
          </div>
          <div class="box">
            <IosUploadOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosUploadOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosUploadIcon :w="w" :h="h"/>

            <div class="box-content">
              IosUploadIcon
            </div>
          </div>
          <div class="box">
            <IosVideocamOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosVideocamOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosVideocamIcon :w="w" :h="h"/>

            <div class="box-content">
              IosVideocamIcon
            </div>
          </div>
          <div class="box">
            <IosVolumeHighIcon :w="w" :h="h"/>

            <div class="box-content">
              IosVolumeHighIcon
            </div>
          </div>
          <div class="box">
            <IosVolumeLowIcon :w="w" :h="h"/>

            <div class="box-content">
              IosVolumeLowIcon
            </div>
          </div>
          <div class="box">
            <IosWineglassOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosWineglassOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosWineglassIcon :w="w" :h="h"/>

            <div class="box-content">
              IosWineglassIcon
            </div>
          </div>
          <div class="box">
            <IosWorldOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              IosWorldOutlineIcon
            </div>
          </div>
          <div class="box">
            <IosWorldIcon :w="w" :h="h"/>

            <div class="box-content">
              IosWorldIcon
            </div>
          </div>
          <div class="box">
            <IpadIcon :w="w" :h="h"/>

            <div class="box-content">
              IpadIcon
            </div>
          </div>
          <div class="box">
            <IphoneIcon :w="w" :h="h"/>

            <div class="box-content">
              IphoneIcon
            </div>
          </div>
          <div class="box">
            <IpodIcon :w="w" :h="h"/>

            <div class="box-content">
              IpodIcon
            </div>
          </div>
          <div class="box">
            <JetIcon :w="w" :h="h"/>

            <div class="box-content">
              JetIcon
            </div>
          </div>
          <div class="box">
            <KeyIcon :w="w" :h="h"/>

            <div class="box-content">
              KeyIcon
            </div>
          </div>
          <div class="box">
            <KnifeIcon :w="w" :h="h"/>

            <div class="box-content">
              KnifeIcon
            </div>
          </div>
          <div class="box">
            <LaptopIcon :w="w" :h="h"/>

            <div class="box-content">
              LaptopIcon
            </div>
          </div>
          <div class="box">
            <LeafIcon :w="w" :h="h"/>

            <div class="box-content">
              LeafIcon
            </div>
          </div>
          <div class="box">
            <LevelsIcon :w="w" :h="h"/>

            <div class="box-content">
              LevelsIcon
            </div>
          </div>
          <div class="box">
            <LightbulbIcon :w="w" :h="h"/>

            <div class="box-content">
              LightbulbIcon
            </div>
          </div>
          <div class="box">
            <LinkIcon :w="w" :h="h"/>

            <div class="box-content">
              LinkIcon
            </div>
          </div>
          <div class="box">
            <LoadAIcon :w="w" :h="h"/>

            <div class="box-content">
              LoadAIcon
            </div>
          </div>
          <div class="box">
            <LoadBIcon :w="w" :h="h"/>

            <div class="box-content">
              LoadBIcon
            </div>
          </div>
          <div class="box">
            <LoadCIcon :w="w" :h="h"/>

            <div class="box-content">
              LoadCIcon
            </div>
          </div>
          <div class="box">
            <LoadDIcon :w="w" :h="h"/>

            <div class="box-content">
              LoadDIcon
            </div>
          </div>
          <div class="box">
            <LocationIcon :w="w" :h="h"/>

            <div class="box-content">
              LocationIcon
            </div>
          </div>
          <div class="box">
            <LockCombinationIcon :w="w" :h="h"/>

            <div class="box-content">
              LockCombinationIcon
            </div>
          </div>
          <div class="box">
            <LockedIcon :w="w" :h="h"/>

            <div class="box-content">
              LockedIcon
            </div>
          </div>
          <div class="box">
            <LogInIcon :w="w" :h="h"/>

            <div class="box-content">
              LogInIcon
            </div>
          </div>
          <div class="box">
            <LogOutIcon :w="w" :h="h"/>

            <div class="box-content">
              LogOutIcon
            </div>
          </div>
          <div class="box">
            <LoopIcon :w="w" :h="h"/>

            <div class="box-content">
              LoopIcon
            </div>
          </div>
          <div class="box">
            <MagnetIcon :w="w" :h="h"/>

            <div class="box-content">
              MagnetIcon
            </div>
          </div>
          <div class="box">
            <MaleIcon :w="w" :h="h"/>

            <div class="box-content">
              MaleIcon
            </div>
          </div>
          <div class="box">
            <ManIcon :w="w" :h="h"/>

            <div class="box-content">
              ManIcon
            </div>
          </div>
          <div class="box">
            <MapIcon :w="w" :h="h"/>

            <div class="box-content">
              MapIcon
            </div>
          </div>
          <div class="box">
            <MedkitIcon :w="w" :h="h"/>

            <div class="box-content">
              MedkitIcon
            </div>
          </div>
          <div class="box">
            <MergeIcon :w="w" :h="h"/>

            <div class="box-content">
              MergeIcon
            </div>
          </div>
          <div class="box">
            <MicAIcon :w="w" :h="h"/>

            <div class="box-content">
              MicAIcon
            </div>
          </div>
          <div class="box">
            <MicBIcon :w="w" :h="h"/>

            <div class="box-content">
              MicBIcon
            </div>
          </div>
          <div class="box">
            <MicCIcon :w="w" :h="h"/>

            <div class="box-content">
              MicCIcon
            </div>
          </div>
          <div class="box">
            <MinusCircledIcon :w="w" :h="h"/>

            <div class="box-content">
              MinusCircledIcon
            </div>
          </div>
          <div class="box">
            <MinusRoundIcon :w="w" :h="h"/>

            <div class="box-content">
              MinusRoundIcon
            </div>
          </div>
          <div class="box">
            <MinusIcon :w="w" :h="h"/>

            <div class="box-content">
              MinusIcon
            </div>
          </div>
          <div class="box">
            <ModelSIcon :w="w" :h="h"/>

            <div class="box-content">
              ModelSIcon
            </div>
          </div>
          <div class="box">
            <MonitorIcon :w="w" :h="h"/>

            <div class="box-content">
              MonitorIcon
            </div>
          </div>
          <div class="box">
            <MouseIcon :w="w" :h="h"/>

            <div class="box-content">
              MouseIcon
            </div>
          </div>
          <div class="box">
            <MoreIcon :w="w" :h="h"/>

            <div class="box-content">
              MoreIcon
            </div>
          </div>
          <div class="box">
            <MusicNoteIcon :w="w" :h="h"/>

            <div class="box-content">
              MusicNoteIcon
            </div>
          </div>
          <div class="box">
            <NaviconRoundIcon :w="w" :h="h"/>

            <div class="box-content">
              NaviconRoundIcon
            </div>
          </div>
          <div class="box">
            <NaviconIcon :w="w" :h="h"/>

            <div class="box-content">
              NaviconIcon
            </div>
          </div>
          <div class="box">
            <NavigateIcon :w="w" :h="h"/>

            <div class="box-content">
              NavigateIcon
            </div>
          </div>
          <div class="box">
            <NetworkIcon :w="w" :h="h"/>

            <div class="box-content">
              NetworkIcon
            </div>
          </div>
          <div class="box">
            <NoSmokingIcon :w="w" :h="h"/>

            <div class="box-content">
              NoSmokingIcon
            </div>
          </div>
          <div class="box">
            <NuclearIcon :w="w" :h="h"/>

            <div class="box-content">
              NuclearIcon
            </div>
          </div>
          <div class="box">
            <OutletIcon :w="w" :h="h"/>

            <div class="box-content">
              OutletIcon
            </div>
          </div>
          <div class="box">
            <PaintbrushIcon :w="w" :h="h"/>

            <div class="box-content">
              PaintbrushIcon
            </div>
          </div>
          <div class="box">
            <PaintbucketIcon :w="w" :h="h"/>

            <div class="box-content">
              PaintbucketIcon
            </div>
          </div>
          <div class="box">
            <PaperAirplaneIcon :w="w" :h="h"/>

            <div class="box-content">
              PaperAirplaneIcon
            </div>
          </div>
          <div class="box">
            <PaperclipIcon :w="w" :h="h"/>

            <div class="box-content">
              PaperclipIcon
            </div>
          </div>
          <div class="box">
            <PauseIcon :w="w" :h="h"/>

            <div class="box-content">
              PauseIcon
            </div>
          </div>
          <div class="box">
            <PersonAddIcon :w="w" :h="h"/>

            <div class="box-content">
              PersonAddIcon
            </div>
          </div>
          <div class="box">
            <PersonStalkerIcon :w="w" :h="h"/>

            <div class="box-content">
              PersonStalkerIcon
            </div>
          </div>
          <div class="box">
            <PersonIcon :w="w" :h="h"/>

            <div class="box-content">
              PersonIcon
            </div>
          </div>
          <div class="box">
            <PieGraphIcon :w="w" :h="h"/>

            <div class="box-content">
              PieGraphIcon
            </div>
          </div>
          <div class="box">
            <PinIcon :w="w" :h="h"/>

            <div class="box-content">
              PinIcon
            </div>
          </div>
          <div class="box">
            <PinpointIcon :w="w" :h="h"/>

            <div class="box-content">
              PinpointIcon
            </div>
          </div>
          <div class="box">
            <PizzaIcon :w="w" :h="h"/>

            <div class="box-content">
              PizzaIcon
            </div>
          </div>
          <div class="box">
            <PlaneIcon :w="w" :h="h"/>

            <div class="box-content">
              PlaneIcon
            </div>
          </div>
          <div class="box">
            <PlanetIcon :w="w" :h="h"/>

            <div class="box-content">
              PlanetIcon
            </div>
          </div>
          <div class="box">
            <PlayIcon :w="w" :h="h"/>

            <div class="box-content">
              PlayIcon
            </div>
          </div>
          <div class="box">
            <PlaystationIcon :w="w" :h="h"/>

            <div class="box-content">
              PlaystationIcon
            </div>
          </div>
          <div class="box">
            <PlusCircledIcon :w="w" :h="h"/>

            <div class="box-content">
              PlusCircledIcon
            </div>
          </div>
          <div class="box">
            <PlusRoundIcon :w="w" :h="h"/>

            <div class="box-content">
              PlusRoundIcon
            </div>
          </div>
          <div class="box">
            <PlusIcon :w="w" :h="h"/>

            <div class="box-content">
              PlusIcon
            </div>
          </div>
          <div class="box">
            <PodiumIcon :w="w" :h="h"/>

            <div class="box-content">
              PodiumIcon
            </div>
          </div>
          <div class="box">
            <PoundIcon :w="w" :h="h"/>

            <div class="box-content">
              PoundIcon
            </div>
          </div>
          <div class="box">
            <PowerIcon :w="w" :h="h"/>

            <div class="box-content">
              PowerIcon
            </div>
          </div>
          <div class="box">
            <PricetagIcon :w="w" :h="h"/>

            <div class="box-content">
              PricetagIcon
            </div>
          </div>
          <div class="box">
            <PricetagsIcon :w="w" :h="h"/>

            <div class="box-content">
              PricetagsIcon
            </div>
          </div>
          <div class="box">
            <PrinterIcon :w="w" :h="h"/>

            <div class="box-content">
              PrinterIcon
            </div>
          </div>
          <div class="box">
            <PullRequestIcon :w="w" :h="h"/>

            <div class="box-content">
              PullRequestIcon
            </div>
          </div>
          <div class="box">
            <QrScannerIcon :w="w" :h="h"/>

            <div class="box-content">
              QrScannerIcon
            </div>
          </div>
          <div class="box">
            <QuoteIcon :w="w" :h="h"/>

            <div class="box-content">
              QuoteIcon
            </div>
          </div>
          <div class="box">
            <RadioWavesIcon :w="w" :h="h"/>

            <div class="box-content">
              RadioWavesIcon
            </div>
          </div>
          <div class="box">
            <RecordIcon :w="w" :h="h"/>

            <div class="box-content">
              RecordIcon
            </div>
          </div>
          <div class="box">
            <RefreshIcon :w="w" :h="h"/>

            <div class="box-content">
              RefreshIcon
            </div>
          </div>
          <div class="box">
            <ReplyAllIcon :w="w" :h="h"/>

            <div class="box-content">
              ReplyAllIcon
            </div>
          </div>
          <div class="box">
            <ReplyIcon :w="w" :h="h"/>

            <div class="box-content">
              ReplyIcon
            </div>
          </div>
          <div class="box">
            <RibbonAIcon :w="w" :h="h"/>

            <div class="box-content">
              RibbonAIcon
            </div>
          </div>
          <div class="box">
            <RibbonBIcon :w="w" :h="h"/>

            <div class="box-content">
              RibbonBIcon
            </div>
          </div>
          <div class="box">
            <SadOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SadOutlineIcon
            </div>
          </div>
          <div class="box">
            <SadIcon :w="w" :h="h"/>

            <div class="box-content">
              SadIcon
            </div>
          </div>
          <div class="box">
            <ScissorsIcon :w="w" :h="h"/>

            <div class="box-content">
              ScissorsIcon
            </div>
          </div>
          <div class="box">
            <SearchIcon :w="w" :h="h"/>

            <div class="box-content">
              SearchIcon
            </div>
          </div>
          <div class="box">
            <SettingsIcon :w="w" :h="h"/>

            <div class="box-content">
              SettingsIcon
            </div>
          </div>
          <div class="box">
            <ShareIcon :w="w" :h="h"/>

            <div class="box-content">
              ShareIcon
            </div>
          </div>
          <div class="box">
            <ShuffleIcon :w="w" :h="h"/>

            <div class="box-content">
              ShuffleIcon
            </div>
          </div>
          <div class="box">
            <SkipBackwardIcon :w="w" :h="h"/>

            <div class="box-content">
              SkipBackwardIcon
            </div>
          </div>
          <div class="box">
            <SkipForwardIcon :w="w" :h="h"/>

            <div class="box-content">
              SkipForwardIcon
            </div>
          </div>
          <div class="box">
            <SocialAndroidOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialAndroidOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialAndroidIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialAndroidIcon
            </div>
          </div>
          <div class="box">
            <SocialAngularOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialAngularOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialAngularIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialAngularIcon
            </div>
          </div>
          <div class="box">
            <SocialAppleOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialAppleOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialAppleIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialAppleIcon
            </div>
          </div>
          <div class="box">
            <SocialBitcoinOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialBitcoinOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialBitcoinIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialBitcoinIcon
            </div>
          </div>
          <div class="box">
            <SocialBufferOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialBufferOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialBufferIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialBufferIcon
            </div>
          </div>
          <div class="box">
            <SocialChromeOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialChromeOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialChromeIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialChromeIcon
            </div>
          </div>
          <div class="box">
            <SocialCodepenOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialCodepenOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialCodepenIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialCodepenIcon
            </div>
          </div>
          <div class="box">
            <SocialCss3OutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialCss3OutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialCss3Icon :w="w" :h="h"/>

            <div class="box-content">
              SocialCss3Icon
            </div>
          </div>
          <div class="box">
            <SocialDesignernewsOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialDesignernewsOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialDesignernewsIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialDesignernewsIcon
            </div>
          </div>
          <div class="box">
            <SocialDribbbleOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialDribbbleOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialDribbbleIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialDribbbleIcon
            </div>
          </div>
          <div class="box">
            <SocialDropboxOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialDropboxOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialDropboxIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialDropboxIcon
            </div>
          </div>
          <div class="box">
            <SocialEuroOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialEuroOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialEuroIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialEuroIcon
            </div>
          </div>
          <div class="box">
            <SocialFacebookIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialFacebookIcon
            </div>
          </div>
          <div class="box">
            <SocialFacebookOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialFacebookOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialFoursquareOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialFoursquareOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialFoursquareIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialFoursquareIcon
            </div>
          </div>
          <div class="box">
            <SocialFreebsdDevilIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialFreebsdDevilIcon
            </div>
          </div>
          <div class="box">
            <SocialGithubOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialGithubOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialGithubIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialGithubIcon
            </div>
          </div>
          <div class="box">
            <SocialGoogleOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialGoogleOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialGoogleIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialGoogleIcon
            </div>
          </div>
          <div class="box">
            <SocialGoogleplusIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialGoogleplusIcon
            </div>
          </div>
          <div class="box">
            <SocialHackernewsOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialHackernewsOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialGoogleplusOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialGoogleplusOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialHackernewsIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialHackernewsIcon
            </div>
          </div>
          <div class="box">
            <SocialHtml5OutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialHtml5OutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialHtml5Icon :w="w" :h="h"/>

            <div class="box-content">
              SocialHtml5Icon
            </div>
          </div>
          <div class="box">
            <SocialInstagramOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialInstagramOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialInstagramIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialInstagramIcon
            </div>
          </div>
          <div class="box">
            <SocialJavascriptOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialJavascriptOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialJavascriptIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialJavascriptIcon
            </div>
          </div>
          <div class="box">
            <SocialLinkedinOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialLinkedinOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialLinkedinIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialLinkedinIcon
            </div>
          </div>
          <div class="box">
            <SocialMarkdownIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialMarkdownIcon
            </div>
          </div>
          <div class="box">
            <SocialNodejsIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialNodejsIcon
            </div>
          </div>
          <div class="box">
            <SocialOctocatIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialOctocatIcon
            </div>
          </div>
          <div class="box">
            <SocialPinterestOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialPinterestOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialPinterestIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialPinterestIcon
            </div>
          </div>
          <div class="box">
            <SocialPythonIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialPythonIcon
            </div>
          </div>
          <div class="box">
            <SocialRedditOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialRedditOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialRssOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialRssOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialRedditIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialRedditIcon
            </div>
          </div>
          <div class="box">
            <SocialRssIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialRssIcon
            </div>
          </div>
          <div class="box">
            <SocialSassIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialSassIcon
            </div>
          </div>
          <div class="box">
            <SocialSkypeOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialSkypeOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialSkypeIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialSkypeIcon
            </div>
          </div>
          <div class="box">
            <SocialSnapchatIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialSnapchatIcon
            </div>
          </div>
          <div class="box">
            <SocialSnapchatOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialSnapchatOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialTumblrOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialTumblrOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialTumblrIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialTumblrIcon
            </div>
          </div>
          <div class="box">
            <SocialTwitchOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialTwitchOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialTuxIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialTuxIcon
            </div>
          </div>
          <div class="box">
            <SocialTwitchIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialTwitchIcon
            </div>
          </div>
          <div class="box">
            <SocialUsdOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialUsdOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialTwitterOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialTwitterOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialUsdIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialUsdIcon
            </div>
          </div>
          <div class="box">
            <SocialTwitterIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialTwitterIcon
            </div>
          </div>
          <div class="box">
            <SocialVimeoOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialVimeoOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialWhatsappIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialWhatsappIcon
            </div>
          </div>
          <div class="box">
            <SocialWhatsappOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialWhatsappOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialWindowsOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialWindowsOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialVimeoIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialVimeoIcon
            </div>
          </div>
          <div class="box">
            <SocialWindowsIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialWindowsIcon
            </div>
          </div>
          <div class="box">
            <SocialWordpressOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialWordpressOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialWordpressIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialWordpressIcon
            </div>
          </div>
          <div class="box">
            <SocialYahooOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialYahooOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialYenOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialYenOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialYenIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialYenIcon
            </div>
          </div>
          <div class="box">
            <SocialYoutubeOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialYoutubeOutlineIcon
            </div>
          </div>
          <div class="box">
            <SocialYahooIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialYahooIcon
            </div>
          </div>
          <div class="box">
            <SocialYoutubeIcon :w="w" :h="h"/>

            <div class="box-content">
              SocialYoutubeIcon
            </div>
          </div>
          <div class="box">
            <SoupCanIcon :w="w" :h="h"/>

            <div class="box-content">
              SoupCanIcon
            </div>
          </div>
          <div class="box">
            <SoupCanOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              SoupCanOutlineIcon
            </div>
          </div>
          <div class="box">
            <SpeedometerIcon :w="w" :h="h"/>

            <div class="box-content">
              SpeedometerIcon
            </div>
          </div>
          <div class="box">
            <SpeakerphoneIcon :w="w" :h="h"/>

            <div class="box-content">
              SpeakerphoneIcon
            </div>
          </div>
          <div class="box">
            <SpoonIcon :w="w" :h="h"/>

            <div class="box-content">
              SpoonIcon
            </div>
          </div>
          <div class="box">
            <StatsBarsIcon :w="w" :h="h"/>

            <div class="box-content">
              StatsBarsIcon
            </div>
          </div>
          <div class="box">
            <StarIcon :w="w" :h="h"/>

            <div class="box-content">
              StarIcon
            </div>
          </div>
          <div class="box">
            <SteamIcon :w="w" :h="h"/>

            <div class="box-content">
              SteamIcon
            </div>
          </div>
          <div class="box">
            <StopIcon :w="w" :h="h"/>

            <div class="box-content">
              StopIcon
            </div>
          </div>
          <div class="box">
            <ThermometerIcon :w="w" :h="h"/>

            <div class="box-content">
              ThermometerIcon
            </div>
          </div>
          <div class="box">
            <ThumbsupIcon :w="w" :h="h"/>

            <div class="box-content">
              ThumbsupIcon
            </div>
          </div>
          <div class="box">
            <ToggleFilledIcon :w="w" :h="h"/>

            <div class="box-content">
              ToggleFilledIcon
            </div>
          </div>
          <div class="box">
            <ToggleIcon :w="w" :h="h"/>

            <div class="box-content">
              ToggleIcon
            </div>
          </div>
          <div class="box">
            <ThumbsdownIcon :w="w" :h="h"/>

            <div class="box-content">
              ThumbsdownIcon
            </div>
          </div>
          <div class="box">
            <TrashAIcon :w="w" :h="h"/>

            <div class="box-content">
              TrashAIcon
            </div>
          </div>
          <div class="box">
            <TrashBIcon :w="w" :h="h"/>

            <div class="box-content">
              TrashBIcon
            </div>
          </div>
          <div class="box">
            <TrophyIcon :w="w" :h="h"/>

            <div class="box-content">
              TrophyIcon
            </div>
          </div>
          <div class="box">
            <TransgenderIcon :w="w" :h="h"/>

            <div class="box-content">
              TransgenderIcon
            </div>
          </div>
          <div class="box">
            <TshirtOutlineIcon :w="w" :h="h"/>

            <div class="box-content">
              TshirtOutlineIcon
            </div>
          </div>
          <div class="box">
            <TshirtIcon :w="w" :h="h"/>

            <div class="box-content">
              TshirtIcon
            </div>
          </div>
          <div class="box">
            <UmbrellaIcon :w="w" :h="h"/>

            <div class="box-content">
              UmbrellaIcon
            </div>
          </div>
          <div class="box">
            <UniversityIcon :w="w" :h="h"/>

            <div class="box-content">
              UniversityIcon
            </div>
          </div>
          <div class="box">
            <UploadIcon :w="w" :h="h"/>

            <div class="box-content">
              UploadIcon
            </div>
          </div>
          <div class="box">
            <UnlockedIcon :w="w" :h="h"/>

            <div class="box-content">
              UnlockedIcon
            </div>
          </div>
          <div class="box">
            <UsbIcon :w="w" :h="h"/>

            <div class="box-content">
              UsbIcon
            </div>
          </div>
          <div class="box">
            <VideocameraIcon :w="w" :h="h"/>

            <div class="box-content">
              VideocameraIcon
            </div>
          </div>
          <div class="box">
            <VolumeHighIcon :w="w" :h="h"/>

            <div class="box-content">
              VolumeHighIcon
            </div>
          </div>
          <div class="box">
            <VolumeLowIcon :w="w" :h="h"/>

            <div class="box-content">
              VolumeLowIcon
            </div>
          </div>
          <div class="box">
            <VolumeMediumIcon :w="w" :h="h"/>

            <div class="box-content">
              VolumeMediumIcon
            </div>
          </div>
          <div class="box">
            <VolumeMuteIcon :w="w" :h="h"/>

            <div class="box-content">
              VolumeMuteIcon
            </div>
          </div>
          <div class="box">
            <WandIcon :w="w" :h="h"/>

            <div class="box-content">
              WandIcon
            </div>
          </div>
          <div class="box">
            <WaterdropIcon :w="w" :h="h"/>

            <div class="box-content">
              WaterdropIcon
            </div>
          </div>
          <div class="box">
            <WifiIcon :w="w" :h="h"/>

            <div class="box-content">
              WifiIcon
            </div>
          </div>
          <div class="box">
            <WineglassIcon :w="w" :h="h"/>

            <div class="box-content">
              WineglassIcon
            </div>
          </div>
          <div class="box">
            <WomanIcon :w="w" :h="h"/>

            <div class="box-content">
              WomanIcon
            </div>
          </div>
          <div class="box">
            <WrenchIcon :w="w" :h="h"/>

            <div class="box-content">
              WrenchIcon
            </div>
          </div>
          <div class="box">
            <XboxIcon :w="w" :h="h"/>

            <div class="box-content">
              XboxIcon
            </div>
          </div>
      </div>

    </div>

    <div class="grid__row content centered"><h2>Contribute</h2><p> Feel free to fork <i class="fa fa-code-fork"></i> on <a href="https://github.com/mazipan/vue-ionicons" target="_blank">GitHub <i class="fa fa-github"></i></a> if you have any features <i class="fa fa-cart-plus"></i> or bugs <i class="fa fa-bug"></i>!</p></div><div class="grid__row content centered"><h2>Contact Developer</h2><p><a href="https://github.com/mazipan"> <img src="https://img.shields.io/badge/mazipan-Github-lightgrey.svg?maxAge=3600" alt="Github"> </a><a href="mailto:mazipanneh@gmail.com"> <img src="https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600" alt="Email"> </a><a href="https://mazipanneh.com/blog/"> <img src="https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600" alt="Blog"> </a><a href="https://facebook.com/mazipanneh"> <img src="https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600" alt="Facebook"> </a><br/><a href="https://twitter.com/Maz_Ipan"> <img src="https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600" alt="Twitter"> </a><a href="https://id.linkedin.com/in/irfanmaulanamazipan"> <img src="https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600" alt="Linkedin"> </a><a href="https://www.slideshare.net/IrfanMaulana21"> <img src="https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600" alt="Slideshare"> </a></p></div><div class="grid__row content centered"><p> Copyright © 2017 <a href="https://mazipanneh.com/blog/">Irfan Maulana</a>, All Rights Reserved.</p></div>
  </div>
</template>

<script>
import AndroidAddCircleIcon  from 'dist/android-add-circle.vue'
import AlertCircledIcon  from 'dist/alert-circled.vue'
import AlertIcon  from 'dist/alert.vue'
import AndroidAddIcon  from 'dist/android-add.vue'
import AndroidAlarmClockIcon  from 'dist/android-alarm-clock.vue'
import AndroidAlertIcon  from 'dist/android-alert.vue'
import AndroidAppsIcon  from 'dist/android-apps.vue'
import AndroidArchiveIcon  from 'dist/android-archive.vue'
import AndroidArrowDownIcon  from 'dist/android-arrow-down.vue'
import AndroidArrowBackIcon  from 'dist/android-arrow-back.vue'
import AndroidArrowDropdownIcon  from 'dist/android-arrow-dropdown.vue'
import AndroidArrowDropleftCircleIcon  from 'dist/android-arrow-dropleft-circle.vue'
import AndroidArrowDropdownCircleIcon  from 'dist/android-arrow-dropdown-circle.vue'
import AndroidArrowDropleftIcon  from 'dist/android-arrow-dropleft.vue'
import AndroidArrowDroprightCircleIcon  from 'dist/android-arrow-dropright-circle.vue'
import AndroidArrowDroprightIcon  from 'dist/android-arrow-dropright.vue'
import AndroidArrowDropupCircleIcon  from 'dist/android-arrow-dropup-circle.vue'
import AndroidArrowDropupIcon  from 'dist/android-arrow-dropup.vue'
import AndroidArrowForwardIcon  from 'dist/android-arrow-forward.vue'
import AndroidArrowUpIcon  from 'dist/android-arrow-up.vue'
import AndroidAttachIcon  from 'dist/android-attach.vue'
import AndroidBicycleIcon  from 'dist/android-bicycle.vue'
import AndroidBarIcon  from 'dist/android-bar.vue'
import AndroidBoatIcon  from 'dist/android-boat.vue'
import AndroidBookmarkIcon  from 'dist/android-bookmark.vue'
import AndroidBulbIcon  from 'dist/android-bulb.vue'
import AndroidCalendarIcon  from 'dist/android-calendar.vue'
import AndroidBusIcon  from 'dist/android-bus.vue'
import AndroidCallIcon  from 'dist/android-call.vue'
import AndroidCameraIcon  from 'dist/android-camera.vue'
import AndroidCancelIcon  from 'dist/android-cancel.vue'
import AndroidCarIcon  from 'dist/android-car.vue'
import AndroidCartIcon  from 'dist/android-cart.vue'
import AndroidChatIcon  from 'dist/android-chat.vue'
import AndroidCheckboxBlankIcon  from 'dist/android-checkbox-blank.vue'
import AndroidCheckboxOutlineIcon  from 'dist/android-checkbox-outline.vue'
import AndroidCheckboxOutlineBlankIcon  from 'dist/android-checkbox-outline-blank.vue'
import AndroidCheckmarkCircleIcon  from 'dist/android-checkmark-circle.vue'
import AndroidClipboardIcon  from 'dist/android-clipboard.vue'
import AndroidCloseIcon  from 'dist/android-close.vue'
import AndroidCheckboxIcon  from 'dist/android-checkbox.vue'
import AndroidCloudCircleIcon  from 'dist/android-cloud-circle.vue'
import AndroidCloudDoneIcon  from 'dist/android-cloud-done.vue'
import AndroidCloudOutlineIcon  from 'dist/android-cloud-outline.vue'
import AndroidCloudIcon  from 'dist/android-cloud.vue'
import AndroidColorPaletteIcon  from 'dist/android-color-palette.vue'
import AndroidCompassIcon  from 'dist/android-compass.vue'
import AndroidContactsIcon  from 'dist/android-contacts.vue'
import AndroidCreateIcon  from 'dist/android-create.vue'
import AndroidContractIcon  from 'dist/android-contract.vue'
import AndroidContactIcon  from 'dist/android-contact.vue'
import AndroidDocumentIcon  from 'dist/android-document.vue'
import AndroidDeleteIcon  from 'dist/android-delete.vue'
import AndroidDesktopIcon  from 'dist/android-desktop.vue'
import AndroidDoneAllIcon  from 'dist/android-done-all.vue'
import AndroidDoneIcon  from 'dist/android-done.vue'
import AndroidDownloadIcon  from 'dist/android-download.vue'
import AndroidDraftsIcon  from 'dist/android-drafts.vue'
import AndroidExitIcon  from 'dist/android-exit.vue'
import AndroidExpandIcon  from 'dist/android-expand.vue'
import AndroidFavoriteOutlineIcon  from 'dist/android-favorite-outline.vue'
import AndroidFilmIcon  from 'dist/android-film.vue'
import AndroidFavoriteIcon  from 'dist/android-favorite.vue'
import AndroidFolderOpenIcon  from 'dist/android-folder-open.vue'
import AndroidFunnelIcon  from 'dist/android-funnel.vue'
import AndroidHandIcon  from 'dist/android-hand.vue'
import AndroidFolderIcon  from 'dist/android-folder.vue'
import AndroidGlobeIcon  from 'dist/android-globe.vue'
import AndroidHangoutIcon  from 'dist/android-hangout.vue'
import AndroidHappyIcon  from 'dist/android-happy.vue'
import AndroidHomeIcon  from 'dist/android-home.vue'
import AndroidImageIcon  from 'dist/android-image.vue'
import AndroidLaptopIcon  from 'dist/android-laptop.vue'
import AndroidListIcon  from 'dist/android-list.vue'
import AndroidLocateIcon  from 'dist/android-locate.vue'
import AndroidMailIcon  from 'dist/android-mail.vue'
import AndroidMenuIcon  from 'dist/android-menu.vue'
import AndroidMapIcon  from 'dist/android-map.vue'
import AndroidLockIcon  from 'dist/android-lock.vue'
import AndroidMicrophoneIcon  from 'dist/android-microphone.vue'
import AndroidMoreVerticalIcon  from 'dist/android-more-vertical.vue'
import AndroidMicrophoneOffIcon  from 'dist/android-microphone-off.vue'
import AndroidMoreHorizontalIcon  from 'dist/android-more-horizontal.vue'
import AndroidNavigateIcon  from 'dist/android-navigate.vue'
import AndroidNotificationsOffIcon  from 'dist/android-notifications-off.vue'
import AndroidNotificationsIcon  from 'dist/android-notifications.vue'
import AndroidNotificationsNoneIcon  from 'dist/android-notifications-none.vue'
import AndroidOpenIcon  from 'dist/android-open.vue'
import AndroidPersonAddIcon  from 'dist/android-person-add.vue'
import AndroidOptionsIcon  from 'dist/android-options.vue'
import AndroidPersonIcon  from 'dist/android-person.vue'
import AndroidPhoneLandscapeIcon  from 'dist/android-phone-landscape.vue'
import AndroidPeopleIcon  from 'dist/android-people.vue'
import AndroidPhonePortraitIcon  from 'dist/android-phone-portrait.vue'
import AndroidPinIcon  from 'dist/android-pin.vue'
import AndroidPlaystoreIcon  from 'dist/android-playstore.vue'
import AndroidPlaneIcon  from 'dist/android-plane.vue'
import AndroidPrintIcon  from 'dist/android-print.vue'
import AndroidRadioButtonOnIcon  from 'dist/android-radio-button-on.vue'
import AndroidRadioButtonOffIcon  from 'dist/android-radio-button-off.vue'
import AndroidRefreshIcon  from 'dist/android-refresh.vue'
import AndroidRemoveCircleIcon  from 'dist/android-remove-circle.vue'
import AndroidRemoveIcon  from 'dist/android-remove.vue'
import AndroidRestaurantIcon  from 'dist/android-restaurant.vue'
import AndroidSearchIcon  from 'dist/android-search.vue'
import AndroidSadIcon  from 'dist/android-sad.vue'
import AndroidSettingsIcon  from 'dist/android-settings.vue'
import AndroidSendIcon  from 'dist/android-send.vue'
import AndroidShareIcon  from 'dist/android-share.vue'
import AndroidShareAltIcon  from 'dist/android-share-alt.vue'
import AndroidStarHalfIcon  from 'dist/android-star-half.vue'
import AndroidStarOutlineIcon  from 'dist/android-star-outline.vue'
import AndroidStarIcon  from 'dist/android-star.vue'
import AndroidStopwatchIcon  from 'dist/android-stopwatch.vue'
import AndroidSunnyIcon  from 'dist/android-sunny.vue'
import AndroidSubwayIcon  from 'dist/android-subway.vue'
import AndroidTextsmsIcon  from 'dist/android-textsms.vue'
import AndroidSyncIcon  from 'dist/android-sync.vue'
import AndroidTimeIcon  from 'dist/android-time.vue'
import AndroidTrainIcon  from 'dist/android-train.vue'
import AndroidUnlockIcon  from 'dist/android-unlock.vue'
import AndroidUploadIcon  from 'dist/android-upload.vue'
import AndroidVolumeDownIcon  from 'dist/android-volume-down.vue'
import AndroidVolumeMuteIcon  from 'dist/android-volume-mute.vue'
import AndroidVolumeUpIcon  from 'dist/android-volume-up.vue'
import AndroidVolumeOffIcon  from 'dist/android-volume-off.vue'
import AndroidWalkIcon  from 'dist/android-walk.vue'
import AndroidWarningIcon  from 'dist/android-warning.vue'
import AndroidWatchIcon  from 'dist/android-watch.vue'
import AndroidWifiIcon  from 'dist/android-wifi.vue'
import ApertureIcon  from 'dist/aperture.vue'
import ArchiveIcon  from 'dist/archive.vue'
import ArrowDownBIcon  from 'dist/arrow-down-b.vue'
import ArrowDownCIcon  from 'dist/arrow-down-c.vue'
import ArrowExpandIcon  from 'dist/arrow-expand.vue'
import ArrowDownAIcon  from 'dist/arrow-down-a.vue'
import ArrowGraphDownLeftIcon  from 'dist/arrow-graph-down-left.vue'
import ArrowGraphUpLeftIcon  from 'dist/arrow-graph-up-left.vue'
import ArrowGraphDownRightIcon  from 'dist/arrow-graph-down-right.vue'
import ArrowGraphUpRightIcon  from 'dist/arrow-graph-up-right.vue'
import ArrowLeftAIcon  from 'dist/arrow-left-a.vue'
import ArrowLeftBIcon  from 'dist/arrow-left-b.vue'
import ArrowLeftCIcon  from 'dist/arrow-left-c.vue'
import ArrowMoveIcon  from 'dist/arrow-move.vue'
import ArrowResizeIcon  from 'dist/arrow-resize.vue'
import ArrowReturnLeftIcon  from 'dist/arrow-return-left.vue'
import ArrowReturnRightIcon  from 'dist/arrow-return-right.vue'
import ArrowRightAIcon  from 'dist/arrow-right-a.vue'
import ArrowRightBIcon  from 'dist/arrow-right-b.vue'
import ArrowRightCIcon  from 'dist/arrow-right-c.vue'
import ArrowShrinkIcon  from 'dist/arrow-shrink.vue'
import ArrowSwapIcon  from 'dist/arrow-swap.vue'
import ArrowUpAIcon  from 'dist/arrow-up-a.vue'
import ArrowUpBIcon  from 'dist/arrow-up-b.vue'
import AsteriskIcon  from 'dist/asterisk.vue'
import BackspaceOutlineIcon  from 'dist/backspace-outline.vue'
import ArrowUpCIcon  from 'dist/arrow-up-c.vue'
import AtIcon  from 'dist/at.vue'
import BagIcon  from 'dist/bag.vue'
import BackspaceIcon  from 'dist/backspace.vue'
import BatteryChargingIcon  from 'dist/battery-charging.vue'
import BatteryEmptyIcon  from 'dist/battery-empty.vue'
import BatteryFullIcon  from 'dist/battery-full.vue'
import BatteryLowIcon  from 'dist/battery-low.vue'
import BeakerIcon  from 'dist/beaker.vue'
import BatteryHalfIcon  from 'dist/battery-half.vue'
import BluetoothIcon  from 'dist/bluetooth.vue'
import BeerIcon  from 'dist/beer.vue'
import BonfireIcon  from 'dist/bonfire.vue'
import BookmarkIcon  from 'dist/bookmark.vue'
import BriefcaseIcon  from 'dist/briefcase.vue'
import CalculatorIcon  from 'dist/calculator.vue'
import BugIcon  from 'dist/bug.vue'
import CameraIcon  from 'dist/camera.vue'
import BowtieIcon  from 'dist/bowtie.vue'
import CalendarIcon  from 'dist/calendar.vue'
import CardIcon  from 'dist/card.vue'
import CashIcon  from 'dist/cash.vue'
import ChatboxesIcon  from 'dist/chatboxes.vue'
import ChatboxWorkingIcon  from 'dist/chatbox-working.vue'
import ChatboxIcon  from 'dist/chatbox.vue'
import ChatbubbleWorkingIcon  from 'dist/chatbubble-working.vue'
import ChatbubbleIcon  from 'dist/chatbubble.vue'
import CheckmarkCircledIcon  from 'dist/checkmark-circled.vue'
import ChatbubblesIcon  from 'dist/chatbubbles.vue'
import CheckmarkRoundIcon  from 'dist/checkmark-round.vue'
import CheckmarkIcon  from 'dist/checkmark.vue'
import ChevronDownIcon  from 'dist/chevron-down.vue'
import ChevronLeftIcon  from 'dist/chevron-left.vue'
import ChevronRightIcon  from 'dist/chevron-right.vue'
import ClockIcon  from 'dist/clock.vue'
import ChevronUpIcon  from 'dist/chevron-up.vue'
import ClipboardIcon  from 'dist/clipboard.vue'
import CloseCircledIcon  from 'dist/close-circled.vue'
import CloseRoundIcon  from 'dist/close-round.vue'
import CloseIcon  from 'dist/close.vue'
import CloudIcon  from 'dist/cloud.vue'
import CodeDownloadIcon  from 'dist/code-download.vue'
import ClosedCaptioningIcon  from 'dist/closed-captioning.vue'
import CodeWorkingIcon  from 'dist/code-working.vue'
import CodeIcon  from 'dist/code.vue'
import CoffeeIcon  from 'dist/coffee.vue'
import CompassIcon  from 'dist/compass.vue'
import ComposeIcon  from 'dist/compose.vue'
import ConnectionBarsIcon  from 'dist/connection-bars.vue'
import ContrastIcon  from 'dist/contrast.vue'
import CropIcon  from 'dist/crop.vue'
import CubeIcon  from 'dist/cube.vue'
import DiscIcon  from 'dist/disc.vue'
import DocumentTextIcon  from 'dist/document-text.vue'
import DocumentIcon  from 'dist/document.vue'
import DragIcon  from 'dist/drag.vue'
import EarthIcon  from 'dist/earth.vue'
import EaselIcon  from 'dist/easel.vue'
import EditIcon  from 'dist/edit.vue'
import EjectIcon  from 'dist/eject.vue'
import EggIcon  from 'dist/egg.vue'
import EmailUnreadIcon  from 'dist/email-unread.vue'
import EmailIcon  from 'dist/email.vue'
import ErlenmeyerFlaskBubblesIcon  from 'dist/erlenmeyer-flask-bubbles.vue'
import ErlenmeyerFlaskIcon  from 'dist/erlenmeyer-flask.vue'
import EyeDisabledIcon  from 'dist/eye-disabled.vue'
import EyeIcon  from 'dist/eye.vue'
import FemaleIcon  from 'dist/female.vue'
import FilingIcon  from 'dist/filing.vue'
import FilmMarkerIcon  from 'dist/film-marker.vue'
import FireballIcon  from 'dist/fireball.vue'
import FlagIcon  from 'dist/flag.vue'
import FlameIcon  from 'dist/flame.vue'
import FlashOffIcon  from 'dist/flash-off.vue'
import FlashIcon  from 'dist/flash.vue'
import FolderIcon  from 'dist/folder.vue'
import ForkRepoIcon  from 'dist/fork-repo.vue'
import ForkIcon  from 'dist/fork.vue'
import ForwardIcon  from 'dist/forward.vue'
import FunnelIcon  from 'dist/funnel.vue'
import GearAIcon  from 'dist/gear-a.vue'
import GridIcon  from 'dist/grid.vue'
import HammerIcon  from 'dist/hammer.vue'
import GearBIcon  from 'dist/gear-b.vue'
import HappyIcon  from 'dist/happy.vue'
import HeadphoneIcon  from 'dist/headphone.vue'
import HappyOutlineIcon  from 'dist/happy-outline.vue'
import HeartBrokenIcon  from 'dist/heart-broken.vue'
import HeartIcon  from 'dist/heart.vue'
import HelpBuoyIcon  from 'dist/help-buoy.vue'
import HelpCircledIcon  from 'dist/help-circled.vue'
import HelpIcon  from 'dist/help.vue'
import HomeIcon  from 'dist/home.vue'
import IcecreamIcon  from 'dist/icecream.vue'
import ImageIcon  from 'dist/image.vue'
import ImagesIcon  from 'dist/images.vue'
import InformationCircledIcon  from 'dist/information-circled.vue'
import InformationIcon  from 'dist/information.vue'
import IonicIcon  from 'dist/ionic.vue'
import IosAlarmOutlineIcon  from 'dist/ios-alarm-outline.vue'
import IosAlarmIcon  from 'dist/ios-alarm.vue'
import IosAlbumsOutlineIcon  from 'dist/ios-albums-outline.vue'
import IosAlbumsIcon  from 'dist/ios-albums.vue'
import IosAmericanfootballOutlineIcon  from 'dist/ios-americanfootball-outline.vue'
import IosAmericanfootballIcon  from 'dist/ios-americanfootball.vue'
import IosAnalyticsOutlineIcon  from 'dist/ios-analytics-outline.vue'
import IosAnalyticsIcon  from 'dist/ios-analytics.vue'
import IosArrowBackIcon  from 'dist/ios-arrow-back.vue'
import IosArrowDownIcon  from 'dist/ios-arrow-down.vue'
import IosArrowForwardIcon  from 'dist/ios-arrow-forward.vue'
import IosArrowLeftIcon  from 'dist/ios-arrow-left.vue'
import IosArrowRightIcon  from 'dist/ios-arrow-right.vue'
import IosArrowThinDownIcon  from 'dist/ios-arrow-thin-down.vue'
import IosArrowThinLeftIcon  from 'dist/ios-arrow-thin-left.vue'
import IosArrowThinRightIcon  from 'dist/ios-arrow-thin-right.vue'
import IosArrowUpIcon  from 'dist/ios-arrow-up.vue'
import IosArrowThinUpIcon  from 'dist/ios-arrow-thin-up.vue'
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
import IosBoxOutlineIcon  from 'dist/ios-box-outline.vue'
import IosBoxIcon  from 'dist/ios-box.vue'
import IosBriefcaseOutlineIcon  from 'dist/ios-briefcase-outline.vue'
import IosBriefcaseIcon  from 'dist/ios-briefcase.vue'
import IosBrowsersOutlineIcon  from 'dist/ios-browsers-outline.vue'
import IosBrowsersIcon  from 'dist/ios-browsers.vue'
import IosCalculatorOutlineIcon  from 'dist/ios-calculator-outline.vue'
import IosCalculatorIcon  from 'dist/ios-calculator.vue'
import IosCalendarOutlineIcon  from 'dist/ios-calendar-outline.vue'
import IosCalendarIcon  from 'dist/ios-calendar.vue'
import IosCameraOutlineIcon  from 'dist/ios-camera-outline.vue'
import IosCameraIcon  from 'dist/ios-camera.vue'
import IosCartOutlineIcon  from 'dist/ios-cart-outline.vue'
import IosCartIcon  from 'dist/ios-cart.vue'
import IosChatboxesOutlineIcon  from 'dist/ios-chatboxes-outline.vue'
import IosChatboxesIcon  from 'dist/ios-chatboxes.vue'
import IosChatbubbleOutlineIcon  from 'dist/ios-chatbubble-outline.vue'
import IosChatbubbleIcon  from 'dist/ios-chatbubble.vue'
import IosCheckmarkEmptyIcon  from 'dist/ios-checkmark-empty.vue'
import IosCheckmarkOutlineIcon  from 'dist/ios-checkmark-outline.vue'
import IosCheckmarkIcon  from 'dist/ios-checkmark.vue'
import IosCircleFilledIcon  from 'dist/ios-circle-filled.vue'
import IosCircleOutlineIcon  from 'dist/ios-circle-outline.vue'
import IosClockOutlineIcon  from 'dist/ios-clock-outline.vue'
import IosClockIcon  from 'dist/ios-clock.vue'
import IosCloseEmptyIcon  from 'dist/ios-close-empty.vue'
import IosCloseOutlineIcon  from 'dist/ios-close-outline.vue'
import IosCloseIcon  from 'dist/ios-close.vue'
import IosCloudDownloadOutlineIcon  from 'dist/ios-cloud-download-outline.vue'
import IosCloudDownloadIcon  from 'dist/ios-cloud-download.vue'
import IosCloudOutlineIcon  from 'dist/ios-cloud-outline.vue'
import IosCloudUploadOutlineIcon  from 'dist/ios-cloud-upload-outline.vue'
import IosCloudUploadIcon  from 'dist/ios-cloud-upload.vue'
import IosCloudIcon  from 'dist/ios-cloud.vue'
import IosCloudyNightOutlineIcon  from 'dist/ios-cloudy-night-outline.vue'
import IosCloudyNightIcon  from 'dist/ios-cloudy-night.vue'
import IosCloudyOutlineIcon  from 'dist/ios-cloudy-outline.vue'
import IosCloudyIcon  from 'dist/ios-cloudy.vue'
import IosCogOutlineIcon  from 'dist/ios-cog-outline.vue'
import IosCogIcon  from 'dist/ios-cog.vue'
import IosColorFilterOutlineIcon  from 'dist/ios-color-filter-outline.vue'
import IosColorFilterIcon  from 'dist/ios-color-filter.vue'
import IosColorWandOutlineIcon  from 'dist/ios-color-wand-outline.vue'
import IosColorWandIcon  from 'dist/ios-color-wand.vue'
import IosComposeOutlineIcon  from 'dist/ios-compose-outline.vue'
import IosContactOutlineIcon  from 'dist/ios-contact-outline.vue'
import IosComposeIcon  from 'dist/ios-compose.vue'
import IosContactIcon  from 'dist/ios-contact.vue'
import IosCopyOutlineIcon  from 'dist/ios-copy-outline.vue'
import IosCopyIcon  from 'dist/ios-copy.vue'
import IosCropIcon  from 'dist/ios-crop.vue'
import IosCropStrongIcon  from 'dist/ios-crop-strong.vue'
import IosDownloadOutlineIcon  from 'dist/ios-download-outline.vue'
import IosDownloadIcon  from 'dist/ios-download.vue'
import IosDragIcon  from 'dist/ios-drag.vue'
import IosEmailOutlineIcon  from 'dist/ios-email-outline.vue'
import IosEmailIcon  from 'dist/ios-email.vue'
import IosEyeOutlineIcon  from 'dist/ios-eye-outline.vue'
import IosEyeIcon  from 'dist/ios-eye.vue'
import IosFastforwardOutlineIcon  from 'dist/ios-fastforward-outline.vue'
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
import IosFlowerOutlineIcon  from 'dist/ios-flower-outline.vue'
import IosFlowerIcon  from 'dist/ios-flower.vue'
import IosFolderOutlineIcon  from 'dist/ios-folder-outline.vue'
import IosFolderIcon  from 'dist/ios-folder.vue'
import IosFootballOutlineIcon  from 'dist/ios-football-outline.vue'
import IosFootballIcon  from 'dist/ios-football.vue'
import IosGameControllerAOutlineIcon  from 'dist/ios-game-controller-a-outline.vue'
import IosGameControllerAIcon  from 'dist/ios-game-controller-a.vue'
import IosGameControllerBOutlineIcon  from 'dist/ios-game-controller-b-outline.vue'
import IosGameControllerBIcon  from 'dist/ios-game-controller-b.vue'
import IosGearOutlineIcon  from 'dist/ios-gear-outline.vue'
import IosGearIcon  from 'dist/ios-gear.vue'
import IosGlassesOutlineIcon  from 'dist/ios-glasses-outline.vue'
import IosGlassesIcon  from 'dist/ios-glasses.vue'
import IosGridViewOutlineIcon  from 'dist/ios-grid-view-outline.vue'
import IosGridViewIcon  from 'dist/ios-grid-view.vue'
import IosHeartOutlineIcon  from 'dist/ios-heart-outline.vue'
import IosHeartIcon  from 'dist/ios-heart.vue'
import IosHelpEmptyIcon  from 'dist/ios-help-empty.vue'
import IosHelpOutlineIcon  from 'dist/ios-help-outline.vue'
import IosHelpIcon  from 'dist/ios-help.vue'
import IosHomeOutlineIcon  from 'dist/ios-home-outline.vue'
import IosHomeIcon  from 'dist/ios-home.vue'
import IosInfiniteOutlineIcon  from 'dist/ios-infinite-outline.vue'
import IosInfiniteIcon  from 'dist/ios-infinite.vue'
import IosInformationEmptyIcon  from 'dist/ios-information-empty.vue'
import IosInformationOutlineIcon  from 'dist/ios-information-outline.vue'
import IosInformationIcon  from 'dist/ios-information.vue'
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
import IosMedicalOutlineIcon  from 'dist/ios-medical-outline.vue'
import IosMedicalIcon  from 'dist/ios-medical.vue'
import IosMedkitOutlineIcon  from 'dist/ios-medkit-outline.vue'
import IosLoopIcon  from 'dist/ios-loop.vue'
import IosMedkitIcon  from 'dist/ios-medkit.vue'
import IosMicOffIcon  from 'dist/ios-mic-off.vue'
import IosMicOutlineIcon  from 'dist/ios-mic-outline.vue'
import IosMicIcon  from 'dist/ios-mic.vue'
import IosMinusEmptyIcon  from 'dist/ios-minus-empty.vue'
import IosMinusOutlineIcon  from 'dist/ios-minus-outline.vue'
import IosMinusIcon  from 'dist/ios-minus.vue'
import IosMonitorOutlineIcon  from 'dist/ios-monitor-outline.vue'
import IosMonitorIcon  from 'dist/ios-monitor.vue'
import IosMoonOutlineIcon  from 'dist/ios-moon-outline.vue'
import IosMoonIcon  from 'dist/ios-moon.vue'
import IosMoreOutlineIcon  from 'dist/ios-more-outline.vue'
import IosMoreIcon  from 'dist/ios-more.vue'
import IosMusicalNoteIcon  from 'dist/ios-musical-note.vue'
import IosMusicalNotesIcon  from 'dist/ios-musical-notes.vue'
import IosNavigateOutlineIcon  from 'dist/ios-navigate-outline.vue'
import IosNavigateIcon  from 'dist/ios-navigate.vue'
import IosNutritionOutlineIcon  from 'dist/ios-nutrition-outline.vue'
import IosNutritionIcon  from 'dist/ios-nutrition.vue'
import IosPaperOutlineIcon  from 'dist/ios-paper-outline.vue'
import IosPaperIcon  from 'dist/ios-paper.vue'
import IosPaperplaneOutlineIcon  from 'dist/ios-paperplane-outline.vue'
import IosPartlysunnyOutlineIcon  from 'dist/ios-partlysunny-outline.vue'
import IosPartlysunnyIcon  from 'dist/ios-partlysunny.vue'
import IosPauseOutlineIcon  from 'dist/ios-pause-outline.vue'
import IosPauseIcon  from 'dist/ios-pause.vue'
import IosPaperplaneIcon  from 'dist/ios-paperplane.vue'
import IosPawOutlineIcon  from 'dist/ios-paw-outline.vue'
import IosPeopleOutlineIcon  from 'dist/ios-people-outline.vue'
import IosPawIcon  from 'dist/ios-paw.vue'
import IosPersonIcon  from 'dist/ios-person.vue'
import IosPersonaddOutlineIcon  from 'dist/ios-personadd-outline.vue'
import IosPersonOutlineIcon  from 'dist/ios-person-outline.vue'
import IosPersonaddIcon  from 'dist/ios-personadd.vue'
import IosPhotosOutlineIcon  from 'dist/ios-photos-outline.vue'
import IosPeopleIcon  from 'dist/ios-people.vue'
import IosPhotosIcon  from 'dist/ios-photos.vue'
import IosPieOutlineIcon  from 'dist/ios-pie-outline.vue'
import IosPieIcon  from 'dist/ios-pie.vue'
import IosPintOutlineIcon  from 'dist/ios-pint-outline.vue'
import IosPintIcon  from 'dist/ios-pint.vue'
import IosPlayIcon  from 'dist/ios-play.vue'
import IosPlayOutlineIcon  from 'dist/ios-play-outline.vue'
import IosPlusOutlineIcon  from 'dist/ios-plus-outline.vue'
import IosPlusEmptyIcon  from 'dist/ios-plus-empty.vue'
import IosPlusIcon  from 'dist/ios-plus.vue'
import IosPricetagOutlineIcon  from 'dist/ios-pricetag-outline.vue'
import IosPricetagIcon  from 'dist/ios-pricetag.vue'
import IosPricetagsOutlineIcon  from 'dist/ios-pricetags-outline.vue'
import IosPrinterOutlineIcon  from 'dist/ios-printer-outline.vue'
import IosPricetagsIcon  from 'dist/ios-pricetags.vue'
import IosPrinterIcon  from 'dist/ios-printer.vue'
import IosPulseStrongIcon  from 'dist/ios-pulse-strong.vue'
import IosRainyOutlineIcon  from 'dist/ios-rainy-outline.vue'
import IosRainyIcon  from 'dist/ios-rainy.vue'
import IosRecordingOutlineIcon  from 'dist/ios-recording-outline.vue'
import IosPulseIcon  from 'dist/ios-pulse.vue'
import IosRecordingIcon  from 'dist/ios-recording.vue'
import IosRedoIcon  from 'dist/ios-redo.vue'
import IosRefreshEmptyIcon  from 'dist/ios-refresh-empty.vue'
import IosRedoOutlineIcon  from 'dist/ios-redo-outline.vue'
import IosRefreshIcon  from 'dist/ios-refresh.vue'
import IosReloadIcon  from 'dist/ios-reload.vue'
import IosRefreshOutlineIcon  from 'dist/ios-refresh-outline.vue'
import IosReverseCameraIcon  from 'dist/ios-reverse-camera.vue'
import IosReverseCameraOutlineIcon  from 'dist/ios-reverse-camera-outline.vue'
import IosRewindIcon  from 'dist/ios-rewind.vue'
import IosRewindOutlineIcon  from 'dist/ios-rewind-outline.vue'
import IosRoseOutlineIcon  from 'dist/ios-rose-outline.vue'
import IosRoseIcon  from 'dist/ios-rose.vue'
import IosSearchStrongIcon  from 'dist/ios-search-strong.vue'
import IosSearchIcon  from 'dist/ios-search.vue'
import IosSettingsStrongIcon  from 'dist/ios-settings-strong.vue'
import IosSettingsIcon  from 'dist/ios-settings.vue'
import IosShuffleStrongIcon  from 'dist/ios-shuffle-strong.vue'
import IosShuffleIcon  from 'dist/ios-shuffle.vue'
import IosSkipbackwardOutlineIcon  from 'dist/ios-skipbackward-outline.vue'
import IosSkipbackwardIcon  from 'dist/ios-skipbackward.vue'
import IosSkipforwardOutlineIcon  from 'dist/ios-skipforward-outline.vue'
import IosSkipforwardIcon  from 'dist/ios-skipforward.vue'
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
import IosTrashIcon  from 'dist/ios-trash.vue'
import IosUndoOutlineIcon  from 'dist/ios-undo-outline.vue'
import IosUndoIcon  from 'dist/ios-undo.vue'
import IosUnlockedOutlineIcon  from 'dist/ios-unlocked-outline.vue'
import IosUnlockedIcon  from 'dist/ios-unlocked.vue'
import IosUploadOutlineIcon  from 'dist/ios-upload-outline.vue'
import IosUploadIcon  from 'dist/ios-upload.vue'
import IosVideocamOutlineIcon  from 'dist/ios-videocam-outline.vue'
import IosVideocamIcon  from 'dist/ios-videocam.vue'
import IosVolumeHighIcon  from 'dist/ios-volume-high.vue'
import IosVolumeLowIcon  from 'dist/ios-volume-low.vue'
import IosWineglassOutlineIcon  from 'dist/ios-wineglass-outline.vue'
import IosWineglassIcon  from 'dist/ios-wineglass.vue'
import IosWorldOutlineIcon  from 'dist/ios-world-outline.vue'
import IosWorldIcon  from 'dist/ios-world.vue'
import IpadIcon  from 'dist/ipad.vue'
import IphoneIcon  from 'dist/iphone.vue'
import IpodIcon  from 'dist/ipod.vue'
import JetIcon  from 'dist/jet.vue'
import KeyIcon  from 'dist/key.vue'
import KnifeIcon  from 'dist/knife.vue'
import LaptopIcon  from 'dist/laptop.vue'
import LeafIcon  from 'dist/leaf.vue'
import LevelsIcon  from 'dist/levels.vue'
import LightbulbIcon  from 'dist/lightbulb.vue'
import LinkIcon  from 'dist/link.vue'
import LoadAIcon  from 'dist/load-a.vue'
import LoadBIcon  from 'dist/load-b.vue'
import LoadCIcon  from 'dist/load-c.vue'
import LoadDIcon  from 'dist/load-d.vue'
import LocationIcon  from 'dist/location.vue'
import LockCombinationIcon  from 'dist/lock-combination.vue'
import LockedIcon  from 'dist/locked.vue'
import LogInIcon  from 'dist/log-in.vue'
import LogOutIcon  from 'dist/log-out.vue'
import LoopIcon  from 'dist/loop.vue'
import MagnetIcon  from 'dist/magnet.vue'
import MaleIcon  from 'dist/male.vue'
import ManIcon  from 'dist/man.vue'
import MapIcon  from 'dist/map.vue'
import MedkitIcon  from 'dist/medkit.vue'
import MergeIcon  from 'dist/merge.vue'
import MicAIcon  from 'dist/mic-a.vue'
import MicBIcon  from 'dist/mic-b.vue'
import MicCIcon  from 'dist/mic-c.vue'
import MinusCircledIcon  from 'dist/minus-circled.vue'
import MinusRoundIcon  from 'dist/minus-round.vue'
import MinusIcon  from 'dist/minus.vue'
import ModelSIcon  from 'dist/model-s.vue'
import MonitorIcon  from 'dist/monitor.vue'
import MouseIcon  from 'dist/mouse.vue'
import MoreIcon  from 'dist/more.vue'
import MusicNoteIcon  from 'dist/music-note.vue'
import NaviconRoundIcon  from 'dist/navicon-round.vue'
import NaviconIcon  from 'dist/navicon.vue'
import NavigateIcon  from 'dist/navigate.vue'
import NetworkIcon  from 'dist/network.vue'
import NoSmokingIcon  from 'dist/no-smoking.vue'
import NuclearIcon  from 'dist/nuclear.vue'
import OutletIcon  from 'dist/outlet.vue'
import PaintbrushIcon  from 'dist/paintbrush.vue'
import PaintbucketIcon  from 'dist/paintbucket.vue'
import PaperAirplaneIcon  from 'dist/paper-airplane.vue'
import PaperclipIcon  from 'dist/paperclip.vue'
import PauseIcon  from 'dist/pause.vue'
import PersonAddIcon  from 'dist/person-add.vue'
import PersonStalkerIcon  from 'dist/person-stalker.vue'
import PersonIcon  from 'dist/person.vue'
import PieGraphIcon  from 'dist/pie-graph.vue'
import PinIcon  from 'dist/pin.vue'
import PinpointIcon  from 'dist/pinpoint.vue'
import PizzaIcon  from 'dist/pizza.vue'
import PlaneIcon  from 'dist/plane.vue'
import PlanetIcon  from 'dist/planet.vue'
import PlayIcon  from 'dist/play.vue'
import PlaystationIcon  from 'dist/playstation.vue'
import PlusCircledIcon  from 'dist/plus-circled.vue'
import PlusRoundIcon  from 'dist/plus-round.vue'
import PlusIcon  from 'dist/plus.vue'
import PodiumIcon  from 'dist/podium.vue'
import PoundIcon  from 'dist/pound.vue'
import PowerIcon  from 'dist/power.vue'
import PricetagIcon  from 'dist/pricetag.vue'
import PricetagsIcon  from 'dist/pricetags.vue'
import PrinterIcon  from 'dist/printer.vue'
import PullRequestIcon  from 'dist/pull-request.vue'
import QrScannerIcon  from 'dist/qr-scanner.vue'
import QuoteIcon  from 'dist/quote.vue'
import RadioWavesIcon  from 'dist/radio-waves.vue'
import RecordIcon  from 'dist/record.vue'
import RefreshIcon  from 'dist/refresh.vue'
import ReplyAllIcon  from 'dist/reply-all.vue'
import ReplyIcon  from 'dist/reply.vue'
import RibbonAIcon  from 'dist/ribbon-a.vue'
import RibbonBIcon  from 'dist/ribbon-b.vue'
import SadOutlineIcon  from 'dist/sad-outline.vue'
import SadIcon  from 'dist/sad.vue'
import ScissorsIcon  from 'dist/scissors.vue'
import SearchIcon  from 'dist/search.vue'
import SettingsIcon  from 'dist/settings.vue'
import ShareIcon  from 'dist/share.vue'
import ShuffleIcon  from 'dist/shuffle.vue'
import SkipBackwardIcon  from 'dist/skip-backward.vue'
import SkipForwardIcon  from 'dist/skip-forward.vue'
import SocialAndroidOutlineIcon  from 'dist/social-android-outline.vue'
import SocialAndroidIcon  from 'dist/social-android.vue'
import SocialAngularOutlineIcon  from 'dist/social-angular-outline.vue'
import SocialAngularIcon  from 'dist/social-angular.vue'
import SocialAppleOutlineIcon  from 'dist/social-apple-outline.vue'
import SocialAppleIcon  from 'dist/social-apple.vue'
import SocialBitcoinOutlineIcon  from 'dist/social-bitcoin-outline.vue'
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
import SocialDesignernewsIcon  from 'dist/social-designernews.vue'
import SocialDribbbleOutlineIcon  from 'dist/social-dribbble-outline.vue'
import SocialDribbbleIcon  from 'dist/social-dribbble.vue'
import SocialDropboxOutlineIcon  from 'dist/social-dropbox-outline.vue'
import SocialDropboxIcon  from 'dist/social-dropbox.vue'
import SocialEuroOutlineIcon  from 'dist/social-euro-outline.vue'
import SocialEuroIcon  from 'dist/social-euro.vue'
import SocialFacebookIcon  from 'dist/social-facebook.vue'
import SocialFacebookOutlineIcon  from 'dist/social-facebook-outline.vue'
import SocialFoursquareOutlineIcon  from 'dist/social-foursquare-outline.vue'
import SocialFoursquareIcon  from 'dist/social-foursquare.vue'
import SocialFreebsdDevilIcon  from 'dist/social-freebsd-devil.vue'
import SocialGithubOutlineIcon  from 'dist/social-github-outline.vue'
import SocialGithubIcon  from 'dist/social-github.vue'
import SocialGoogleOutlineIcon  from 'dist/social-google-outline.vue'
import SocialGoogleIcon  from 'dist/social-google.vue'
import SocialGoogleplusIcon  from 'dist/social-googleplus.vue'
import SocialHackernewsOutlineIcon  from 'dist/social-hackernews-outline.vue'
import SocialGoogleplusOutlineIcon  from 'dist/social-googleplus-outline.vue'
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
import SocialPinterestOutlineIcon  from 'dist/social-pinterest-outline.vue'
import SocialPinterestIcon  from 'dist/social-pinterest.vue'
import SocialPythonIcon  from 'dist/social-python.vue'
import SocialRedditOutlineIcon  from 'dist/social-reddit-outline.vue'
import SocialRssOutlineIcon  from 'dist/social-rss-outline.vue'
import SocialRedditIcon  from 'dist/social-reddit.vue'
import SocialRssIcon  from 'dist/social-rss.vue'
import SocialSassIcon  from 'dist/social-sass.vue'
import SocialSkypeOutlineIcon  from 'dist/social-skype-outline.vue'
import SocialSkypeIcon  from 'dist/social-skype.vue'
import SocialSnapchatIcon  from 'dist/social-snapchat.vue'
import SocialSnapchatOutlineIcon  from 'dist/social-snapchat-outline.vue'
import SocialTumblrOutlineIcon  from 'dist/social-tumblr-outline.vue'
import SocialTumblrIcon  from 'dist/social-tumblr.vue'
import SocialTwitchOutlineIcon  from 'dist/social-twitch-outline.vue'
import SocialTuxIcon  from 'dist/social-tux.vue'
import SocialTwitchIcon  from 'dist/social-twitch.vue'
import SocialUsdOutlineIcon  from 'dist/social-usd-outline.vue'
import SocialTwitterOutlineIcon  from 'dist/social-twitter-outline.vue'
import SocialUsdIcon  from 'dist/social-usd.vue'
import SocialTwitterIcon  from 'dist/social-twitter.vue'
import SocialVimeoOutlineIcon  from 'dist/social-vimeo-outline.vue'
import SocialWhatsappIcon  from 'dist/social-whatsapp.vue'
import SocialWhatsappOutlineIcon  from 'dist/social-whatsapp-outline.vue'
import SocialWindowsOutlineIcon  from 'dist/social-windows-outline.vue'
import SocialVimeoIcon  from 'dist/social-vimeo.vue'
import SocialWindowsIcon  from 'dist/social-windows.vue'
import SocialWordpressOutlineIcon  from 'dist/social-wordpress-outline.vue'
import SocialWordpressIcon  from 'dist/social-wordpress.vue'
import SocialYahooOutlineIcon  from 'dist/social-yahoo-outline.vue'
import SocialYenOutlineIcon  from 'dist/social-yen-outline.vue'
import SocialYenIcon  from 'dist/social-yen.vue'
import SocialYoutubeOutlineIcon  from 'dist/social-youtube-outline.vue'
import SocialYahooIcon  from 'dist/social-yahoo.vue'
import SocialYoutubeIcon  from 'dist/social-youtube.vue'
import SoupCanIcon  from 'dist/soup-can.vue'
import SoupCanOutlineIcon  from 'dist/soup-can-outline.vue'
import SpeedometerIcon  from 'dist/speedometer.vue'
import SpeakerphoneIcon  from 'dist/speakerphone.vue'
import SpoonIcon  from 'dist/spoon.vue'
import StatsBarsIcon  from 'dist/stats-bars.vue'
import StarIcon  from 'dist/star.vue'
import SteamIcon  from 'dist/steam.vue'
import StopIcon  from 'dist/stop.vue'
import ThermometerIcon  from 'dist/thermometer.vue'
import ThumbsupIcon  from 'dist/thumbsup.vue'
import ToggleFilledIcon  from 'dist/toggle-filled.vue'
import ToggleIcon  from 'dist/toggle.vue'
import ThumbsdownIcon  from 'dist/thumbsdown.vue'
import TrashAIcon  from 'dist/trash-a.vue'
import TrashBIcon  from 'dist/trash-b.vue'
import TrophyIcon  from 'dist/trophy.vue'
import TransgenderIcon  from 'dist/transgender.vue'
import TshirtOutlineIcon  from 'dist/tshirt-outline.vue'
import TshirtIcon  from 'dist/tshirt.vue'
import UmbrellaIcon  from 'dist/umbrella.vue'
import UniversityIcon  from 'dist/university.vue'
import UploadIcon  from 'dist/upload.vue'
import UnlockedIcon  from 'dist/unlocked.vue'
import UsbIcon  from 'dist/usb.vue'
import VideocameraIcon  from 'dist/videocamera.vue'
import VolumeHighIcon  from 'dist/volume-high.vue'
import VolumeLowIcon  from 'dist/volume-low.vue'
import VolumeMediumIcon  from 'dist/volume-medium.vue'
import VolumeMuteIcon  from 'dist/volume-mute.vue'
import WandIcon  from 'dist/wand.vue'
import WaterdropIcon  from 'dist/waterdrop.vue'
import WifiIcon  from 'dist/wifi.vue'
import WineglassIcon  from 'dist/wineglass.vue'
import WomanIcon  from 'dist/woman.vue'
import WrenchIcon  from 'dist/wrench.vue'
import XboxIcon  from 'dist/xbox.vue'

export default {
  name: 'app',
  components: {
    AndroidAddCircleIcon,
    AlertCircledIcon,
    AlertIcon,
    AndroidAddIcon,
    AndroidAlarmClockIcon,
    AndroidAlertIcon,
    AndroidAppsIcon,
    AndroidArchiveIcon,
    AndroidArrowDownIcon,
    AndroidArrowBackIcon,
    AndroidArrowDropdownIcon,
    AndroidArrowDropleftCircleIcon,
    AndroidArrowDropdownCircleIcon,
    AndroidArrowDropleftIcon,
    AndroidArrowDroprightCircleIcon,
    AndroidArrowDroprightIcon,
    AndroidArrowDropupCircleIcon,
    AndroidArrowDropupIcon,
    AndroidArrowForwardIcon,
    AndroidArrowUpIcon,
    AndroidAttachIcon,
    AndroidBicycleIcon,
    AndroidBarIcon,
    AndroidBoatIcon,
    AndroidBookmarkIcon,
    AndroidBulbIcon,
    AndroidCalendarIcon,
    AndroidBusIcon,
    AndroidCallIcon,
    AndroidCameraIcon,
    AndroidCancelIcon,
    AndroidCarIcon,
    AndroidCartIcon,
    AndroidChatIcon,
    AndroidCheckboxBlankIcon,
    AndroidCheckboxOutlineIcon,
    AndroidCheckboxOutlineBlankIcon,
    AndroidCheckmarkCircleIcon,
    AndroidClipboardIcon,
    AndroidCloseIcon,
    AndroidCheckboxIcon,
    AndroidCloudCircleIcon,
    AndroidCloudDoneIcon,
    AndroidCloudOutlineIcon,
    AndroidCloudIcon,
    AndroidColorPaletteIcon,
    AndroidCompassIcon,
    AndroidContactsIcon,
    AndroidCreateIcon,
    AndroidContractIcon,
    AndroidContactIcon,
    AndroidDocumentIcon,
    AndroidDeleteIcon,
    AndroidDesktopIcon,
    AndroidDoneAllIcon,
    AndroidDoneIcon,
    AndroidDownloadIcon,
    AndroidDraftsIcon,
    AndroidExitIcon,
    AndroidExpandIcon,
    AndroidFavoriteOutlineIcon,
    AndroidFilmIcon,
    AndroidFavoriteIcon,
    AndroidFolderOpenIcon,
    AndroidFunnelIcon,
    AndroidHandIcon,
    AndroidFolderIcon,
    AndroidGlobeIcon,
    AndroidHangoutIcon,
    AndroidHappyIcon,
    AndroidHomeIcon,
    AndroidImageIcon,
    AndroidLaptopIcon,
    AndroidListIcon,
    AndroidLocateIcon,
    AndroidMailIcon,
    AndroidMenuIcon,
    AndroidMapIcon,
    AndroidLockIcon,
    AndroidMicrophoneIcon,
    AndroidMoreVerticalIcon,
    AndroidMicrophoneOffIcon,
    AndroidMoreHorizontalIcon,
    AndroidNavigateIcon,
    AndroidNotificationsOffIcon,
    AndroidNotificationsIcon,
    AndroidNotificationsNoneIcon,
    AndroidOpenIcon,
    AndroidPersonAddIcon,
    AndroidOptionsIcon,
    AndroidPersonIcon,
    AndroidPhoneLandscapeIcon,
    AndroidPeopleIcon,
    AndroidPhonePortraitIcon,
    AndroidPinIcon,
    AndroidPlaystoreIcon,
    AndroidPlaneIcon,
    AndroidPrintIcon,
    AndroidRadioButtonOnIcon,
    AndroidRadioButtonOffIcon,
    AndroidRefreshIcon,
    AndroidRemoveCircleIcon,
    AndroidRemoveIcon,
    AndroidRestaurantIcon,
    AndroidSearchIcon,
    AndroidSadIcon,
    AndroidSettingsIcon,
    AndroidSendIcon,
    AndroidShareIcon,
    AndroidShareAltIcon,
    AndroidStarHalfIcon,
    AndroidStarOutlineIcon,
    AndroidStarIcon,
    AndroidStopwatchIcon,
    AndroidSunnyIcon,
    AndroidSubwayIcon,
    AndroidTextsmsIcon,
    AndroidSyncIcon,
    AndroidTimeIcon,
    AndroidTrainIcon,
    AndroidUnlockIcon,
    AndroidUploadIcon,
    AndroidVolumeDownIcon,
    AndroidVolumeMuteIcon,
    AndroidVolumeUpIcon,
    AndroidVolumeOffIcon,
    AndroidWalkIcon,
    AndroidWarningIcon,
    AndroidWatchIcon,
    AndroidWifiIcon,
    ApertureIcon,
    ArchiveIcon,
    ArrowDownBIcon,
    ArrowDownCIcon,
    ArrowExpandIcon,
    ArrowDownAIcon,
    ArrowGraphDownLeftIcon,
    ArrowGraphUpLeftIcon,
    ArrowGraphDownRightIcon,
    ArrowGraphUpRightIcon,
    ArrowLeftAIcon,
    ArrowLeftBIcon,
    ArrowLeftCIcon,
    ArrowMoveIcon,
    ArrowResizeIcon,
    ArrowReturnLeftIcon,
    ArrowReturnRightIcon,
    ArrowRightAIcon,
    ArrowRightBIcon,
    ArrowRightCIcon,
    ArrowShrinkIcon,
    ArrowSwapIcon,
    ArrowUpAIcon,
    ArrowUpBIcon,
    AsteriskIcon,
    BackspaceOutlineIcon,
    ArrowUpCIcon,
    AtIcon,
    BagIcon,
    BackspaceIcon,
    BatteryChargingIcon,
    BatteryEmptyIcon,
    BatteryFullIcon,
    BatteryLowIcon,
    BeakerIcon,
    BatteryHalfIcon,
    BluetoothIcon,
    BeerIcon,
    BonfireIcon,
    BookmarkIcon,
    BriefcaseIcon,
    CalculatorIcon,
    BugIcon,
    CameraIcon,
    BowtieIcon,
    CalendarIcon,
    CardIcon,
    CashIcon,
    ChatboxesIcon,
    ChatboxWorkingIcon,
    ChatboxIcon,
    ChatbubbleWorkingIcon,
    ChatbubbleIcon,
    CheckmarkCircledIcon,
    ChatbubblesIcon,
    CheckmarkRoundIcon,
    CheckmarkIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClockIcon,
    ChevronUpIcon,
    ClipboardIcon,
    CloseCircledIcon,
    CloseRoundIcon,
    CloseIcon,
    CloudIcon,
    CodeDownloadIcon,
    ClosedCaptioningIcon,
    CodeWorkingIcon,
    CodeIcon,
    CoffeeIcon,
    CompassIcon,
    ComposeIcon,
    ConnectionBarsIcon,
    ContrastIcon,
    CropIcon,
    CubeIcon,
    DiscIcon,
    DocumentTextIcon,
    DocumentIcon,
    DragIcon,
    EarthIcon,
    EaselIcon,
    EditIcon,
    EjectIcon,
    EggIcon,
    EmailUnreadIcon,
    EmailIcon,
    ErlenmeyerFlaskBubblesIcon,
    ErlenmeyerFlaskIcon,
    EyeDisabledIcon,
    EyeIcon,
    FemaleIcon,
    FilingIcon,
    FilmMarkerIcon,
    FireballIcon,
    FlagIcon,
    FlameIcon,
    FlashOffIcon,
    FlashIcon,
    FolderIcon,
    ForkRepoIcon,
    ForkIcon,
    ForwardIcon,
    FunnelIcon,
    GearAIcon,
    GridIcon,
    HammerIcon,
    GearBIcon,
    HappyIcon,
    HeadphoneIcon,
    HappyOutlineIcon,
    HeartBrokenIcon,
    HeartIcon,
    HelpBuoyIcon,
    HelpCircledIcon,
    HelpIcon,
    HomeIcon,
    IcecreamIcon,
    ImageIcon,
    ImagesIcon,
    InformationCircledIcon,
    InformationIcon,
    IonicIcon,
    IosAlarmOutlineIcon,
    IosAlarmIcon,
    IosAlbumsOutlineIcon,
    IosAlbumsIcon,
    IosAmericanfootballOutlineIcon,
    IosAmericanfootballIcon,
    IosAnalyticsOutlineIcon,
    IosAnalyticsIcon,
    IosArrowBackIcon,
    IosArrowDownIcon,
    IosArrowForwardIcon,
    IosArrowLeftIcon,
    IosArrowRightIcon,
    IosArrowThinDownIcon,
    IosArrowThinLeftIcon,
    IosArrowThinRightIcon,
    IosArrowUpIcon,
    IosArrowThinUpIcon,
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
    IosBoxOutlineIcon,
    IosBoxIcon,
    IosBriefcaseOutlineIcon,
    IosBriefcaseIcon,
    IosBrowsersOutlineIcon,
    IosBrowsersIcon,
    IosCalculatorOutlineIcon,
    IosCalculatorIcon,
    IosCalendarOutlineIcon,
    IosCalendarIcon,
    IosCameraOutlineIcon,
    IosCameraIcon,
    IosCartOutlineIcon,
    IosCartIcon,
    IosChatboxesOutlineIcon,
    IosChatboxesIcon,
    IosChatbubbleOutlineIcon,
    IosChatbubbleIcon,
    IosCheckmarkEmptyIcon,
    IosCheckmarkOutlineIcon,
    IosCheckmarkIcon,
    IosCircleFilledIcon,
    IosCircleOutlineIcon,
    IosClockOutlineIcon,
    IosClockIcon,
    IosCloseEmptyIcon,
    IosCloseOutlineIcon,
    IosCloseIcon,
    IosCloudDownloadOutlineIcon,
    IosCloudDownloadIcon,
    IosCloudOutlineIcon,
    IosCloudUploadOutlineIcon,
    IosCloudUploadIcon,
    IosCloudIcon,
    IosCloudyNightOutlineIcon,
    IosCloudyNightIcon,
    IosCloudyOutlineIcon,
    IosCloudyIcon,
    IosCogOutlineIcon,
    IosCogIcon,
    IosColorFilterOutlineIcon,
    IosColorFilterIcon,
    IosColorWandOutlineIcon,
    IosColorWandIcon,
    IosComposeOutlineIcon,
    IosContactOutlineIcon,
    IosComposeIcon,
    IosContactIcon,
    IosCopyOutlineIcon,
    IosCopyIcon,
    IosCropIcon,
    IosCropStrongIcon,
    IosDownloadOutlineIcon,
    IosDownloadIcon,
    IosDragIcon,
    IosEmailOutlineIcon,
    IosEmailIcon,
    IosEyeOutlineIcon,
    IosEyeIcon,
    IosFastforwardOutlineIcon,
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
    IosFlowerOutlineIcon,
    IosFlowerIcon,
    IosFolderOutlineIcon,
    IosFolderIcon,
    IosFootballOutlineIcon,
    IosFootballIcon,
    IosGameControllerAOutlineIcon,
    IosGameControllerAIcon,
    IosGameControllerBOutlineIcon,
    IosGameControllerBIcon,
    IosGearOutlineIcon,
    IosGearIcon,
    IosGlassesOutlineIcon,
    IosGlassesIcon,
    IosGridViewOutlineIcon,
    IosGridViewIcon,
    IosHeartOutlineIcon,
    IosHeartIcon,
    IosHelpEmptyIcon,
    IosHelpOutlineIcon,
    IosHelpIcon,
    IosHomeOutlineIcon,
    IosHomeIcon,
    IosInfiniteOutlineIcon,
    IosInfiniteIcon,
    IosInformationEmptyIcon,
    IosInformationOutlineIcon,
    IosInformationIcon,
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
    IosMedicalOutlineIcon,
    IosMedicalIcon,
    IosMedkitOutlineIcon,
    IosLoopIcon,
    IosMedkitIcon,
    IosMicOffIcon,
    IosMicOutlineIcon,
    IosMicIcon,
    IosMinusEmptyIcon,
    IosMinusOutlineIcon,
    IosMinusIcon,
    IosMonitorOutlineIcon,
    IosMonitorIcon,
    IosMoonOutlineIcon,
    IosMoonIcon,
    IosMoreOutlineIcon,
    IosMoreIcon,
    IosMusicalNoteIcon,
    IosMusicalNotesIcon,
    IosNavigateOutlineIcon,
    IosNavigateIcon,
    IosNutritionOutlineIcon,
    IosNutritionIcon,
    IosPaperOutlineIcon,
    IosPaperIcon,
    IosPaperplaneOutlineIcon,
    IosPartlysunnyOutlineIcon,
    IosPartlysunnyIcon,
    IosPauseOutlineIcon,
    IosPauseIcon,
    IosPaperplaneIcon,
    IosPawOutlineIcon,
    IosPeopleOutlineIcon,
    IosPawIcon,
    IosPersonIcon,
    IosPersonaddOutlineIcon,
    IosPersonOutlineIcon,
    IosPersonaddIcon,
    IosPhotosOutlineIcon,
    IosPeopleIcon,
    IosPhotosIcon,
    IosPieOutlineIcon,
    IosPieIcon,
    IosPintOutlineIcon,
    IosPintIcon,
    IosPlayIcon,
    IosPlayOutlineIcon,
    IosPlusOutlineIcon,
    IosPlusEmptyIcon,
    IosPlusIcon,
    IosPricetagOutlineIcon,
    IosPricetagIcon,
    IosPricetagsOutlineIcon,
    IosPrinterOutlineIcon,
    IosPricetagsIcon,
    IosPrinterIcon,
    IosPulseStrongIcon,
    IosRainyOutlineIcon,
    IosRainyIcon,
    IosRecordingOutlineIcon,
    IosPulseIcon,
    IosRecordingIcon,
    IosRedoIcon,
    IosRefreshEmptyIcon,
    IosRedoOutlineIcon,
    IosRefreshIcon,
    IosReloadIcon,
    IosRefreshOutlineIcon,
    IosReverseCameraIcon,
    IosReverseCameraOutlineIcon,
    IosRewindIcon,
    IosRewindOutlineIcon,
    IosRoseOutlineIcon,
    IosRoseIcon,
    IosSearchStrongIcon,
    IosSearchIcon,
    IosSettingsStrongIcon,
    IosSettingsIcon,
    IosShuffleStrongIcon,
    IosShuffleIcon,
    IosSkipbackwardOutlineIcon,
    IosSkipbackwardIcon,
    IosSkipforwardOutlineIcon,
    IosSkipforwardIcon,
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
    IosTrashIcon,
    IosUndoOutlineIcon,
    IosUndoIcon,
    IosUnlockedOutlineIcon,
    IosUnlockedIcon,
    IosUploadOutlineIcon,
    IosUploadIcon,
    IosVideocamOutlineIcon,
    IosVideocamIcon,
    IosVolumeHighIcon,
    IosVolumeLowIcon,
    IosWineglassOutlineIcon,
    IosWineglassIcon,
    IosWorldOutlineIcon,
    IosWorldIcon,
    IpadIcon,
    IphoneIcon,
    IpodIcon,
    JetIcon,
    KeyIcon,
    KnifeIcon,
    LaptopIcon,
    LeafIcon,
    LevelsIcon,
    LightbulbIcon,
    LinkIcon,
    LoadAIcon,
    LoadBIcon,
    LoadCIcon,
    LoadDIcon,
    LocationIcon,
    LockCombinationIcon,
    LockedIcon,
    LogInIcon,
    LogOutIcon,
    LoopIcon,
    MagnetIcon,
    MaleIcon,
    ManIcon,
    MapIcon,
    MedkitIcon,
    MergeIcon,
    MicAIcon,
    MicBIcon,
    MicCIcon,
    MinusCircledIcon,
    MinusRoundIcon,
    MinusIcon,
    ModelSIcon,
    MonitorIcon,
    MouseIcon,
    MoreIcon,
    MusicNoteIcon,
    NaviconRoundIcon,
    NaviconIcon,
    NavigateIcon,
    NetworkIcon,
    NoSmokingIcon,
    NuclearIcon,
    OutletIcon,
    PaintbrushIcon,
    PaintbucketIcon,
    PaperAirplaneIcon,
    PaperclipIcon,
    PauseIcon,
    PersonAddIcon,
    PersonStalkerIcon,
    PersonIcon,
    PieGraphIcon,
    PinIcon,
    PinpointIcon,
    PizzaIcon,
    PlaneIcon,
    PlanetIcon,
    PlayIcon,
    PlaystationIcon,
    PlusCircledIcon,
    PlusRoundIcon,
    PlusIcon,
    PodiumIcon,
    PoundIcon,
    PowerIcon,
    PricetagIcon,
    PricetagsIcon,
    PrinterIcon,
    PullRequestIcon,
    QrScannerIcon,
    QuoteIcon,
    RadioWavesIcon,
    RecordIcon,
    RefreshIcon,
    ReplyAllIcon,
    ReplyIcon,
    RibbonAIcon,
    RibbonBIcon,
    SadOutlineIcon,
    SadIcon,
    ScissorsIcon,
    SearchIcon,
    SettingsIcon,
    ShareIcon,
    ShuffleIcon,
    SkipBackwardIcon,
    SkipForwardIcon,
    SocialAndroidOutlineIcon,
    SocialAndroidIcon,
    SocialAngularOutlineIcon,
    SocialAngularIcon,
    SocialAppleOutlineIcon,
    SocialAppleIcon,
    SocialBitcoinOutlineIcon,
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
    SocialDesignernewsIcon,
    SocialDribbbleOutlineIcon,
    SocialDribbbleIcon,
    SocialDropboxOutlineIcon,
    SocialDropboxIcon,
    SocialEuroOutlineIcon,
    SocialEuroIcon,
    SocialFacebookIcon,
    SocialFacebookOutlineIcon,
    SocialFoursquareOutlineIcon,
    SocialFoursquareIcon,
    SocialFreebsdDevilIcon,
    SocialGithubOutlineIcon,
    SocialGithubIcon,
    SocialGoogleOutlineIcon,
    SocialGoogleIcon,
    SocialGoogleplusIcon,
    SocialHackernewsOutlineIcon,
    SocialGoogleplusOutlineIcon,
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
    SocialPinterestOutlineIcon,
    SocialPinterestIcon,
    SocialPythonIcon,
    SocialRedditOutlineIcon,
    SocialRssOutlineIcon,
    SocialRedditIcon,
    SocialRssIcon,
    SocialSassIcon,
    SocialSkypeOutlineIcon,
    SocialSkypeIcon,
    SocialSnapchatIcon,
    SocialSnapchatOutlineIcon,
    SocialTumblrOutlineIcon,
    SocialTumblrIcon,
    SocialTwitchOutlineIcon,
    SocialTuxIcon,
    SocialTwitchIcon,
    SocialUsdOutlineIcon,
    SocialTwitterOutlineIcon,
    SocialUsdIcon,
    SocialTwitterIcon,
    SocialVimeoOutlineIcon,
    SocialWhatsappIcon,
    SocialWhatsappOutlineIcon,
    SocialWindowsOutlineIcon,
    SocialVimeoIcon,
    SocialWindowsIcon,
    SocialWordpressOutlineIcon,
    SocialWordpressIcon,
    SocialYahooOutlineIcon,
    SocialYenOutlineIcon,
    SocialYenIcon,
    SocialYoutubeOutlineIcon,
    SocialYahooIcon,
    SocialYoutubeIcon,
    SoupCanIcon,
    SoupCanOutlineIcon,
    SpeedometerIcon,
    SpeakerphoneIcon,
    SpoonIcon,
    StatsBarsIcon,
    StarIcon,
    SteamIcon,
    StopIcon,
    ThermometerIcon,
    ThumbsupIcon,
    ToggleFilledIcon,
    ToggleIcon,
    ThumbsdownIcon,
    TrashAIcon,
    TrashBIcon,
    TrophyIcon,
    TransgenderIcon,
    TshirtOutlineIcon,
    TshirtIcon,
    UmbrellaIcon,
    UniversityIcon,
    UploadIcon,
    UnlockedIcon,
    UsbIcon,
    VideocameraIcon,
    VolumeHighIcon,
    VolumeLowIcon,
    VolumeMediumIcon,
    VolumeMuteIcon,
    WandIcon,
    WaterdropIcon,
    WifiIcon,
    WineglassIcon,
    WomanIcon,
    WrenchIcon,
    XboxIcon,
  },
  data () {
    return {
      msg: 'Vue-Ionicons By Irfan Maulana',
      w: '30px',
      h: '30px'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
</style>


