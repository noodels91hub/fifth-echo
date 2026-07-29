# Fifth Echo for Android

This directory contains a native Android wrapper for the existing Fifth Echo web game.
The app loads the game from packaged assets, works without an internet connection, and
does not request the Android `INTERNET` permission.

## App identity

- App name: `Fifth Echo`
- Release package: `com.noodels91hub.fifthecho`
- Debug package: `com.noodels91hub.fifthecho.debug`
- Version: `0.1.0` (`versionCode 1`)
- Minimum Android: Android 8.0 / API 26
- Target Android: API 36
- Orientation: immersive landscape on phones; responsive layout remains available for larger devices

The release package name is permanent once an app is created in Play Console. Confirm it
before the first store upload.

## How web changes reach Android

The `syncWebAssets` Gradle task copies the latest repository `game.js`, `styles.css`,
`privacy.html`, and `assets/` into the APK/AAB every time Android builds. The Android-specific
offline `index.html` and safe-area CSS live in `android/web/`.

No manual asset copying is needed after changing the game.

## Build

From this directory:

```powershell
.\gradlew.bat lintDebug assembleDebug --offline
```

Installable debug APK:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

A prepared local playtest copy is available at:

```text
android/artifacts/FifthEcho-0.1.0-debug.apk
```

Build an unsigned release bundle for package verification:

```powershell
.\gradlew.bat bundleRelease --offline
```

The resulting `app-release.aab` is deliberately unsigned and cannot be uploaded to Google
Play until the owner creates an upload key. Keystores and passwords must never be committed.

## Install on a phone

Either copy the debug APK to an Android phone and approve “Install unknown apps” for the file
manager, or enable USB debugging and run:

```powershell
adb install -r .\artifacts\FifthEcho-0.1.0-debug.apk
```

The debug build is signed automatically with Android's local debug certificate. It is for
playtesting only and is not a Play Store release.

## Verification performed

- `assembleDebug`: successful
- `bundleRelease`: successful, confirmed unsigned
- `lintDebug`: successful
- Package and launcher activity inspected with Android `aapt`
- Required web files and all five worlds confirmed inside the APK
- APK declares no permissions
- Source `game.js` hash confirmed equal to the generated Android asset
- Debug APK installed and launched on a Samsung Galaxy A17 running Android 16
- Compact title and combat layouts verified at the A17's 832 × 384 CSS viewport

Full-campaign touch, long-session performance, battery, and additional-device testing remain
required before release.

See [PLAY_STORE_CHECKLIST.md](PLAY_STORE_CHECKLIST.md) for the owner-controlled release steps.
