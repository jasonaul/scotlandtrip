This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

```
ScotlandTrip
├─ .bundle
│  └─ config
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc.js
├─ .watchmanconfig
├─ App.tsx
├─ Gemfile
├─ README.md
├─ __tests__
│  └─ App.test.tsx
├─ android
│  ├─ app
│  │  ├─ proguard-rules.pro
│  │  └─ src
│  │     ├─ debug
│  │     │  ├─ AndroidManifest.xml
│  │     │  └─ java
│  │     │     └─ com
│  │     │        └─ scotlandtrip
│  │     │           └─ ReactNativeFlipper.java
│  │     ├─ main
│  │     │  ├─ AndroidManifest.xml
│  │     │  ├─ java
│  │     │  │  └─ com
│  │     │  │     └─ scotlandtrip
│  │     │  │        ├─ MainActivity.java
│  │     │  │        └─ MainApplication.java
│  │     │  └─ res
│  │     │     ├─ drawable
│  │     │     │  └─ rn_edit_text_material.xml
│  │     │     ├─ mipmap-hdpi
│  │     │     │  ├─ ic_launcher.png
│  │     │     │  └─ ic_launcher_round.png
│  │     │     ├─ mipmap-mdpi
│  │     │     │  ├─ ic_launcher.png
│  │     │     │  └─ ic_launcher_round.png
│  │     │     ├─ mipmap-xhdpi
│  │     │     │  ├─ ic_launcher.png
│  │     │     │  └─ ic_launcher_round.png
│  │     │     ├─ mipmap-xxhdpi
│  │     │     │  ├─ ic_launcher.png
│  │     │     │  └─ ic_launcher_round.png
│  │     │     ├─ mipmap-xxxhdpi
│  │     │     │  ├─ ic_launcher.png
│  │     │     │  └─ ic_launcher_round.png
│  │     │     └─ values
│  │     │        ├─ strings.xml
│  │     │        └─ styles.xml
│  │     └─ release
│  │        └─ java
│  │           └─ com
│  │              └─ scotlandtrip
│  │                 └─ ReactNativeFlipper.java
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradle.properties
│  ├─ gradlew
│  └─ gradlew.bat
├─ app.json
├─ babel.config.js
├─ index.js
├─ ios
│  ├─ .xcode.env
│  ├─ Podfile
│  ├─ ScotlandTrip
│  │  ├─ AppDelegate.h
│  │  ├─ AppDelegate.mm
│  │  ├─ Images.xcassets
│  │  │  ├─ AppIcon.appiconset
│  │  │  │  └─ Contents.json
│  │  │  └─ Contents.json
│  │  ├─ Info.plist
│  │  ├─ LaunchScreen.storyboard
│  │  └─ main.m
│  ├─ ScotlandTrip.xcodeproj
│  │  ├─ project.pbxproj
│  │  └─ xcshareddata
│  │     └─ xcschemes
│  │        └─ ScotlandTrip.xcscheme
│  └─ ScotlandTripTests
│     ├─ Info.plist
│     └─ ScotlandTripTests.m
├─ jest.config.js
├─ metro.config.js
├─ package-lock.json
├─ package.json
├─ tsconfig.json
└─ vendor
   └─ bundle
      └─ ruby
         └─ 2.6.0
            ├─ bin
            │  └─ httpclient
            ├─ build_info
            ├─ cache
            │  ├─ CFPropertyList-3.0.6.gem
            │  ├─ activesupport-6.1.7.6.gem
            │  ├─ addressable-2.8.5.gem
            │  ├─ concurrent-ruby-1.2.2.gem
            │  ├─ httpclient-2.8.3.gem
            │  ├─ i18n-1.14.1.gem
            │  ├─ json-2.6.3.gem
            │  ├─ minitest-5.20.0.gem
            │  ├─ public_suffix-4.0.7.gem
            │  ├─ rexml-3.2.6.gem
            │  ├─ tzinfo-2.0.6.gem
            │  └─ zeitwerk-2.6.11.gem
            ├─ doc
            ├─ extensions
            │  └─ universal-darwin-22
            │     └─ 2.6.0
            │        └─ json-2.6.3
            │           └─ gem_make.out
            ├─ gems
            │  ├─ CFPropertyList-3.0.6
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ README.rdoc
            │  │  ├─ THANKS
            │  │  └─ lib
            │  │     ├─ cfpropertylist
            │  │     │  ├─ rbBinaryCFPropertyList.rb
            │  │     │  ├─ rbCFPlistError.rb
            │  │     │  ├─ rbCFPropertyList.rb
            │  │     │  ├─ rbCFTypes.rb
            │  │     │  ├─ rbLibXMLParser.rb
            │  │     │  ├─ rbNokogiriParser.rb
            │  │     │  ├─ rbPlainCFPropertyList.rb
            │  │     │  └─ rbREXMLParser.rb
            │  │     └─ cfpropertylist.rb
            │  ├─ activesupport-6.1.7.6
            │  │  ├─ CHANGELOG.md
            │  │  ├─ MIT-LICENSE
            │  │  ├─ README.rdoc
            │  │  └─ lib
            │  │     ├─ active_support
            │  │     │  ├─ actionable_error.rb
            │  │     │  ├─ all.rb
            │  │     │  ├─ array_inquirer.rb
            │  │     │  ├─ backtrace_cleaner.rb
            │  │     │  ├─ benchmarkable.rb
            │  │     │  ├─ builder.rb
            │  │     │  ├─ cache
            │  │     │  │  ├─ file_store.rb
            │  │     │  │  ├─ mem_cache_store.rb
            │  │     │  │  ├─ memory_store.rb
            │  │     │  │  ├─ null_store.rb
            │  │     │  │  ├─ redis_cache_store.rb
            │  │     │  │  └─ strategy
            │  │     │  │     ├─ local_cache.rb
            │  │     │  │     └─ local_cache_middleware.rb
            │  │     │  ├─ cache.rb
            │  │     │  ├─ callbacks.rb
            │  │     │  ├─ concern.rb
            │  │     │  ├─ concurrency
            │  │     │  │  ├─ load_interlock_aware_monitor.rb
            │  │     │  │  └─ share_lock.rb
            │  │     │  ├─ configurable.rb
            │  │     │  ├─ configuration_file.rb
            │  │     │  ├─ core_ext
            │  │     │  │  ├─ array
            │  │     │  │  │  ├─ access.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ extract.rb
            │  │     │  │  │  ├─ extract_options.rb
            │  │     │  │  │  ├─ grouping.rb
            │  │     │  │  │  ├─ inquiry.rb
            │  │     │  │  │  └─ wrap.rb
            │  │     │  │  ├─ array.rb
            │  │     │  │  ├─ benchmark.rb
            │  │     │  │  ├─ big_decimal
            │  │     │  │  │  └─ conversions.rb
            │  │     │  │  ├─ big_decimal.rb
            │  │     │  │  ├─ class
            │  │     │  │  │  ├─ attribute.rb
            │  │     │  │  │  ├─ attribute_accessors.rb
            │  │     │  │  │  └─ subclasses.rb
            │  │     │  │  ├─ class.rb
            │  │     │  │  ├─ date
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ blank.rb
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ date.rb
            │  │     │  │  ├─ date_and_time
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ compatibility.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ date_time
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ blank.rb
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ compatibility.rb
            │  │     │  │  │  └─ conversions.rb
            │  │     │  │  ├─ date_time.rb
            │  │     │  │  ├─ digest
            │  │     │  │  │  └─ uuid.rb
            │  │     │  │  ├─ digest.rb
            │  │     │  │  ├─ enumerable.rb
            │  │     │  │  ├─ file
            │  │     │  │  │  └─ atomic.rb
            │  │     │  │  ├─ file.rb
            │  │     │  │  ├─ hash
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ deep_merge.rb
            │  │     │  │  │  ├─ deep_transform_values.rb
            │  │     │  │  │  ├─ except.rb
            │  │     │  │  │  ├─ indifferent_access.rb
            │  │     │  │  │  ├─ keys.rb
            │  │     │  │  │  ├─ reverse_merge.rb
            │  │     │  │  │  └─ slice.rb
            │  │     │  │  ├─ hash.rb
            │  │     │  │  ├─ integer
            │  │     │  │  │  ├─ inflections.rb
            │  │     │  │  │  ├─ multiple.rb
            │  │     │  │  │  └─ time.rb
            │  │     │  │  ├─ integer.rb
            │  │     │  │  ├─ kernel
            │  │     │  │  │  ├─ concern.rb
            │  │     │  │  │  ├─ reporting.rb
            │  │     │  │  │  └─ singleton_class.rb
            │  │     │  │  ├─ kernel.rb
            │  │     │  │  ├─ load_error.rb
            │  │     │  │  ├─ marshal.rb
            │  │     │  │  ├─ module
            │  │     │  │  │  ├─ aliasing.rb
            │  │     │  │  │  ├─ anonymous.rb
            │  │     │  │  │  ├─ attr_internal.rb
            │  │     │  │  │  ├─ attribute_accessors.rb
            │  │     │  │  │  ├─ attribute_accessors_per_thread.rb
            │  │     │  │  │  ├─ concerning.rb
            │  │     │  │  │  ├─ delegation.rb
            │  │     │  │  │  ├─ deprecation.rb
            │  │     │  │  │  ├─ introspection.rb
            │  │     │  │  │  ├─ redefine_method.rb
            │  │     │  │  │  └─ remove_method.rb
            │  │     │  │  ├─ module.rb
            │  │     │  │  ├─ name_error.rb
            │  │     │  │  ├─ numeric
            │  │     │  │  │  ├─ bytes.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  └─ time.rb
            │  │     │  │  ├─ numeric.rb
            │  │     │  │  ├─ object
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ blank.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ deep_dup.rb
            │  │     │  │  │  ├─ duplicable.rb
            │  │     │  │  │  ├─ inclusion.rb
            │  │     │  │  │  ├─ instance_variables.rb
            │  │     │  │  │  ├─ json.rb
            │  │     │  │  │  ├─ to_param.rb
            │  │     │  │  │  ├─ to_query.rb
            │  │     │  │  │  ├─ try.rb
            │  │     │  │  │  └─ with_options.rb
            │  │     │  │  ├─ object.rb
            │  │     │  │  ├─ range
            │  │     │  │  │  ├─ compare_range.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ each.rb
            │  │     │  │  │  ├─ include_time_with_zone.rb
            │  │     │  │  │  └─ overlaps.rb
            │  │     │  │  ├─ range.rb
            │  │     │  │  ├─ regexp.rb
            │  │     │  │  ├─ securerandom.rb
            │  │     │  │  ├─ string
            │  │     │  │  │  ├─ access.rb
            │  │     │  │  │  ├─ behavior.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ exclude.rb
            │  │     │  │  │  ├─ filters.rb
            │  │     │  │  │  ├─ indent.rb
            │  │     │  │  │  ├─ inflections.rb
            │  │     │  │  │  ├─ inquiry.rb
            │  │     │  │  │  ├─ multibyte.rb
            │  │     │  │  │  ├─ output_safety.rb
            │  │     │  │  │  ├─ starts_ends_with.rb
            │  │     │  │  │  ├─ strip.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ string.rb
            │  │     │  │  ├─ symbol
            │  │     │  │  │  └─ starts_ends_with.rb
            │  │     │  │  ├─ symbol.rb
            │  │     │  │  ├─ time
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ compatibility.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ time.rb
            │  │     │  │  └─ uri.rb
            │  │     │  ├─ core_ext.rb
            │  │     │  ├─ current_attributes
            │  │     │  │  └─ test_helper.rb
            │  │     │  ├─ current_attributes.rb
            │  │     │  ├─ dependencies
            │  │     │  │  ├─ autoload.rb
            │  │     │  │  ├─ interlock.rb
            │  │     │  │  └─ zeitwerk_integration.rb
            │  │     │  ├─ dependencies.rb
            │  │     │  ├─ deprecation
            │  │     │  │  ├─ behaviors.rb
            │  │     │  │  ├─ constant_accessor.rb
            │  │     │  │  ├─ disallowed.rb
            │  │     │  │  ├─ instance_delegator.rb
            │  │     │  │  ├─ method_wrappers.rb
            │  │     │  │  ├─ proxy_wrappers.rb
            │  │     │  │  └─ reporting.rb
            │  │     │  ├─ deprecation.rb
            │  │     │  ├─ descendants_tracker.rb
            │  │     │  ├─ digest.rb
            │  │     │  ├─ duration
            │  │     │  │  ├─ iso8601_parser.rb
            │  │     │  │  └─ iso8601_serializer.rb
            │  │     │  ├─ duration.rb
            │  │     │  ├─ encrypted_configuration.rb
            │  │     │  ├─ encrypted_file.rb
            │  │     │  ├─ environment_inquirer.rb
            │  │     │  ├─ evented_file_update_checker.rb
            │  │     │  ├─ execution_wrapper.rb
            │  │     │  ├─ executor.rb
            │  │     │  ├─ file_update_checker.rb
            │  │     │  ├─ fork_tracker.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ gzip.rb
            │  │     │  ├─ hash_with_indifferent_access.rb
            │  │     │  ├─ i18n.rb
            │  │     │  ├─ i18n_railtie.rb
            │  │     │  ├─ inflections.rb
            │  │     │  ├─ inflector
            │  │     │  │  ├─ inflections.rb
            │  │     │  │  ├─ methods.rb
            │  │     │  │  └─ transliterate.rb
            │  │     │  ├─ inflector.rb
            │  │     │  ├─ json
            │  │     │  │  ├─ decoding.rb
            │  │     │  │  └─ encoding.rb
            │  │     │  ├─ json.rb
            │  │     │  ├─ key_generator.rb
            │  │     │  ├─ lazy_load_hooks.rb
            │  │     │  ├─ locale
            │  │     │  │  ├─ en.rb
            │  │     │  │  └─ en.yml
            │  │     │  ├─ log_subscriber
            │  │     │  │  └─ test_helper.rb
            │  │     │  ├─ log_subscriber.rb
            │  │     │  ├─ logger.rb
            │  │     │  ├─ logger_silence.rb
            │  │     │  ├─ logger_thread_safe_level.rb
            │  │     │  ├─ message_encryptor.rb
            │  │     │  ├─ message_verifier.rb
            │  │     │  ├─ messages
            │  │     │  │  ├─ metadata.rb
            │  │     │  │  ├─ rotation_configuration.rb
            │  │     │  │  └─ rotator.rb
            │  │     │  ├─ multibyte
            │  │     │  │  ├─ chars.rb
            │  │     │  │  └─ unicode.rb
            │  │     │  ├─ multibyte.rb
            │  │     │  ├─ notifications
            │  │     │  │  ├─ fanout.rb
            │  │     │  │  └─ instrumenter.rb
            │  │     │  ├─ notifications.rb
            │  │     │  ├─ number_helper
            │  │     │  │  ├─ number_converter.rb
            │  │     │  │  ├─ number_to_currency_converter.rb
            │  │     │  │  ├─ number_to_delimited_converter.rb
            │  │     │  │  ├─ number_to_human_converter.rb
            │  │     │  │  ├─ number_to_human_size_converter.rb
            │  │     │  │  ├─ number_to_percentage_converter.rb
            │  │     │  │  ├─ number_to_phone_converter.rb
            │  │     │  │  ├─ number_to_rounded_converter.rb
            │  │     │  │  └─ rounding_helper.rb
            │  │     │  ├─ number_helper.rb
            │  │     │  ├─ option_merger.rb
            │  │     │  ├─ ordered_hash.rb
            │  │     │  ├─ ordered_options.rb
            │  │     │  ├─ parameter_filter.rb
            │  │     │  ├─ per_thread_registry.rb
            │  │     │  ├─ proxy_object.rb
            │  │     │  ├─ rails.rb
            │  │     │  ├─ railtie.rb
            │  │     │  ├─ reloader.rb
            │  │     │  ├─ rescuable.rb
            │  │     │  ├─ secure_compare_rotator.rb
            │  │     │  ├─ security_utils.rb
            │  │     │  ├─ string_inquirer.rb
            │  │     │  ├─ subscriber.rb
            │  │     │  ├─ tagged_logging.rb
            │  │     │  ├─ test_case.rb
            │  │     │  ├─ testing
            │  │     │  │  ├─ assertions.rb
            │  │     │  │  ├─ autorun.rb
            │  │     │  │  ├─ constant_lookup.rb
            │  │     │  │  ├─ declarative.rb
            │  │     │  │  ├─ deprecation.rb
            │  │     │  │  ├─ file_fixtures.rb
            │  │     │  │  ├─ isolation.rb
            │  │     │  │  ├─ method_call_assertions.rb
            │  │     │  │  ├─ parallelization
            │  │     │  │  │  ├─ server.rb
            │  │     │  │  │  └─ worker.rb
            │  │     │  │  ├─ parallelization.rb
            │  │     │  │  ├─ setup_and_teardown.rb
            │  │     │  │  ├─ stream.rb
            │  │     │  │  ├─ tagged_logging.rb
            │  │     │  │  └─ time_helpers.rb
            │  │     │  ├─ time.rb
            │  │     │  ├─ time_with_zone.rb
            │  │     │  ├─ values
            │  │     │  │  └─ time_zone.rb
            │  │     │  ├─ version.rb
            │  │     │  ├─ xml_mini
            │  │     │  │  ├─ jdom.rb
            │  │     │  │  ├─ libxml.rb
            │  │     │  │  ├─ libxmlsax.rb
            │  │     │  │  ├─ nokogiri.rb
            │  │     │  │  ├─ nokogirisax.rb
            │  │     │  │  └─ rexml.rb
            │  │     │  └─ xml_mini.rb
            │  │     └─ active_support.rb
            │  ├─ addressable-2.8.5
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ addressable.gemspec
            │  │  ├─ data
            │  │  │  └─ unicode.data
            │  │  ├─ lib
            │  │  │  ├─ addressable
            │  │  │  │  ├─ idna
            │  │  │  │  │  ├─ native.rb
            │  │  │  │  │  └─ pure.rb
            │  │  │  │  ├─ idna.rb
            │  │  │  │  ├─ template.rb
            │  │  │  │  ├─ uri.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ addressable.rb
            │  │  ├─ spec
            │  │  │  ├─ addressable
            │  │  │  │  ├─ idna_spec.rb
            │  │  │  │  ├─ net_http_compat_spec.rb
            │  │  │  │  ├─ security_spec.rb
            │  │  │  │  ├─ template_spec.rb
            │  │  │  │  └─ uri_spec.rb
            │  │  │  └─ spec_helper.rb
            │  │  └─ tasks
            │  │     ├─ clobber.rake
            │  │     ├─ gem.rake
            │  │     ├─ git.rake
            │  │     ├─ metrics.rake
            │  │     ├─ profile.rake
            │  │     ├─ rspec.rake
            │  │     └─ yard.rake
            │  ├─ concurrent-ruby-1.2.2
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ ext
            │  │  │  └─ concurrent-ruby
            │  │  │     ├─ ConcurrentRubyService.java
            │  │  │     └─ com
            │  │  │        └─ concurrent_ruby
            │  │  │           └─ ext
            │  │  │              ├─ AtomicReferenceLibrary.java
            │  │  │              ├─ JRubyMapBackendLibrary.java
            │  │  │              ├─ JavaAtomicBooleanLibrary.java
            │  │  │              ├─ JavaAtomicFixnumLibrary.java
            │  │  │              ├─ JavaSemaphoreLibrary.java
            │  │  │              ├─ SynchronizationLibrary.java
            │  │  │              ├─ jsr166e
            │  │  │              │  ├─ ConcurrentHashMap.java
            │  │  │              │  ├─ ConcurrentHashMapV8.java
            │  │  │              │  ├─ LongAdder.java
            │  │  │              │  ├─ Striped64.java
            │  │  │              │  └─ nounsafe
            │  │  │              │     ├─ ConcurrentHashMapV8.java
            │  │  │              │     ├─ LongAdder.java
            │  │  │              │     └─ Striped64.java
            │  │  │              └─ jsr166y
            │  │  │                 └─ ThreadLocalRandom.java
            │  │  └─ lib
            │  │     └─ concurrent-ruby
            │  │        ├─ concurrent
            │  │        │  ├─ agent.rb
            │  │        │  ├─ array.rb
            │  │        │  ├─ async.rb
            │  │        │  ├─ atom.rb
            │  │        │  ├─ atomic
            │  │        │  │  ├─ atomic_boolean.rb
            │  │        │  │  ├─ atomic_fixnum.rb
            │  │        │  │  ├─ atomic_markable_reference.rb
            │  │        │  │  ├─ atomic_reference.rb
            │  │        │  │  ├─ count_down_latch.rb
            │  │        │  │  ├─ cyclic_barrier.rb
            │  │        │  │  ├─ event.rb
            │  │        │  │  ├─ fiber_local_var.rb
            │  │        │  │  ├─ java_count_down_latch.rb
            │  │        │  │  ├─ locals.rb
            │  │        │  │  ├─ lock_local_var.rb
            │  │        │  │  ├─ mutex_atomic_boolean.rb
            │  │        │  │  ├─ mutex_atomic_fixnum.rb
            │  │        │  │  ├─ mutex_count_down_latch.rb
            │  │        │  │  ├─ mutex_semaphore.rb
            │  │        │  │  ├─ read_write_lock.rb
            │  │        │  │  ├─ reentrant_read_write_lock.rb
            │  │        │  │  ├─ semaphore.rb
            │  │        │  │  └─ thread_local_var.rb
            │  │        │  ├─ atomic_reference
            │  │        │  │  ├─ atomic_direct_update.rb
            │  │        │  │  ├─ mutex_atomic.rb
            │  │        │  │  └─ numeric_cas_wrapper.rb
            │  │        │  ├─ atomics.rb
            │  │        │  ├─ collection
            │  │        │  │  ├─ copy_on_notify_observer_set.rb
            │  │        │  │  ├─ copy_on_write_observer_set.rb
            │  │        │  │  ├─ java_non_concurrent_priority_queue.rb
            │  │        │  │  ├─ lock_free_stack.rb
            │  │        │  │  ├─ map
            │  │        │  │  │  ├─ atomic_reference_map_backend.rb
            │  │        │  │  │  ├─ mri_map_backend.rb
            │  │        │  │  │  ├─ non_concurrent_map_backend.rb
            │  │        │  │  │  ├─ synchronized_map_backend.rb
            │  │        │  │  │  └─ truffleruby_map_backend.rb
            │  │        │  │  ├─ non_concurrent_priority_queue.rb
            │  │        │  │  └─ ruby_non_concurrent_priority_queue.rb
            │  │        │  ├─ concern
            │  │        │  │  ├─ deprecation.rb
            │  │        │  │  ├─ dereferenceable.rb
            │  │        │  │  ├─ logging.rb
            │  │        │  │  ├─ obligation.rb
            │  │        │  │  └─ observable.rb
            │  │        │  ├─ concurrent_ruby.jar
            │  │        │  ├─ configuration.rb
            │  │        │  ├─ constants.rb
            │  │        │  ├─ dataflow.rb
            │  │        │  ├─ delay.rb
            │  │        │  ├─ errors.rb
            │  │        │  ├─ exchanger.rb
            │  │        │  ├─ executor
            │  │        │  │  ├─ abstract_executor_service.rb
            │  │        │  │  ├─ cached_thread_pool.rb
            │  │        │  │  ├─ executor_service.rb
            │  │        │  │  ├─ fixed_thread_pool.rb
            │  │        │  │  ├─ immediate_executor.rb
            │  │        │  │  ├─ indirect_immediate_executor.rb
            │  │        │  │  ├─ java_executor_service.rb
            │  │        │  │  ├─ java_single_thread_executor.rb
            │  │        │  │  ├─ java_thread_pool_executor.rb
            │  │        │  │  ├─ ruby_executor_service.rb
            │  │        │  │  ├─ ruby_single_thread_executor.rb
            │  │        │  │  ├─ ruby_thread_pool_executor.rb
            │  │        │  │  ├─ safe_task_executor.rb
            │  │        │  │  ├─ serial_executor_service.rb
            │  │        │  │  ├─ serialized_execution.rb
            │  │        │  │  ├─ serialized_execution_delegator.rb
            │  │        │  │  ├─ simple_executor_service.rb
            │  │        │  │  ├─ single_thread_executor.rb
            │  │        │  │  ├─ thread_pool_executor.rb
            │  │        │  │  └─ timer_set.rb
            │  │        │  ├─ executors.rb
            │  │        │  ├─ future.rb
            │  │        │  ├─ hash.rb
            │  │        │  ├─ immutable_struct.rb
            │  │        │  ├─ ivar.rb
            │  │        │  ├─ map.rb
            │  │        │  ├─ maybe.rb
            │  │        │  ├─ mutable_struct.rb
            │  │        │  ├─ mvar.rb
            │  │        │  ├─ options.rb
            │  │        │  ├─ promise.rb
            │  │        │  ├─ promises.rb
            │  │        │  ├─ re_include.rb
            │  │        │  ├─ scheduled_task.rb
            │  │        │  ├─ set.rb
            │  │        │  ├─ settable_struct.rb
            │  │        │  ├─ synchronization
            │  │        │  │  ├─ abstract_lockable_object.rb
            │  │        │  │  ├─ abstract_object.rb
            │  │        │  │  ├─ abstract_struct.rb
            │  │        │  │  ├─ condition.rb
            │  │        │  │  ├─ full_memory_barrier.rb
            │  │        │  │  ├─ jruby_lockable_object.rb
            │  │        │  │  ├─ lock.rb
            │  │        │  │  ├─ lockable_object.rb
            │  │        │  │  ├─ mutex_lockable_object.rb
            │  │        │  │  ├─ object.rb
            │  │        │  │  ├─ safe_initialization.rb
            │  │        │  │  └─ volatile.rb
            │  │        │  ├─ synchronization.rb
            │  │        │  ├─ thread_safe
            │  │        │  │  ├─ synchronized_delegator.rb
            │  │        │  │  ├─ util
            │  │        │  │  │  ├─ adder.rb
            │  │        │  │  │  ├─ cheap_lockable.rb
            │  │        │  │  │  ├─ data_structures.rb
            │  │        │  │  │  ├─ power_of_two_tuple.rb
            │  │        │  │  │  ├─ striped64.rb
            │  │        │  │  │  ├─ volatile.rb
            │  │        │  │  │  └─ xor_shift_random.rb
            │  │        │  │  └─ util.rb
            │  │        │  ├─ timer_task.rb
            │  │        │  ├─ tuple.rb
            │  │        │  ├─ tvar.rb
            │  │        │  ├─ utility
            │  │        │  │  ├─ engine.rb
            │  │        │  │  ├─ monotonic_time.rb
            │  │        │  │  ├─ native_extension_loader.rb
            │  │        │  │  ├─ native_integer.rb
            │  │        │  │  └─ processor_counter.rb
            │  │        │  └─ version.rb
            │  │        ├─ concurrent-ruby.rb
            │  │        └─ concurrent.rb
            │  ├─ httpclient-2.8.3
            │  │  ├─ README.md
            │  │  ├─ bin
            │  │  │  ├─ httpclient
            │  │  │  └─ jsonclient
            │  │  ├─ lib
            │  │  │  ├─ hexdump.rb
            │  │  │  ├─ http-access2
            │  │  │  │  ├─ cookie.rb
            │  │  │  │  └─ http.rb
            │  │  │  ├─ http-access2.rb
            │  │  │  ├─ httpclient
            │  │  │  │  ├─ auth.rb
            │  │  │  │  ├─ cacert.pem
            │  │  │  │  ├─ cacert1024.pem
            │  │  │  │  ├─ connection.rb
            │  │  │  │  ├─ cookie.rb
            │  │  │  │  ├─ http.rb
            │  │  │  │  ├─ include_client.rb
            │  │  │  │  ├─ jruby_ssl_socket.rb
            │  │  │  │  ├─ session.rb
            │  │  │  │  ├─ ssl_config.rb
            │  │  │  │  ├─ ssl_socket.rb
            │  │  │  │  ├─ timeout.rb
            │  │  │  │  ├─ util.rb
            │  │  │  │  ├─ version.rb
            │  │  │  │  └─ webagent-cookie.rb
            │  │  │  ├─ httpclient.rb
            │  │  │  ├─ jsonclient.rb
            │  │  │  └─ oauthclient.rb
            │  │  ├─ sample
            │  │  │  ├─ async.rb
            │  │  │  ├─ auth.rb
            │  │  │  ├─ cookie.rb
            │  │  │  ├─ dav.rb
            │  │  │  ├─ howto.rb
            │  │  │  ├─ jsonclient.rb
            │  │  │  ├─ oauth_buzz.rb
            │  │  │  ├─ oauth_friendfeed.rb
            │  │  │  ├─ oauth_twitter.rb
            │  │  │  ├─ ssl
            │  │  │  │  ├─ 0cert.pem
            │  │  │  │  ├─ 0key.pem
            │  │  │  │  ├─ 1000cert.pem
            │  │  │  │  ├─ 1000key.pem
            │  │  │  │  ├─ htdocs
            │  │  │  │  │  └─ index.html
            │  │  │  │  ├─ ssl_client.rb
            │  │  │  │  └─ webrick_httpsd.rb
            │  │  │  ├─ stream.rb
            │  │  │  ├─ thread.rb
            │  │  │  └─ wcat.rb
            │  │  └─ test
            │  │     ├─ ca-chain.pem
            │  │     ├─ ca.cert
            │  │     ├─ client-pass.key
            │  │     ├─ client.cert
            │  │     ├─ client.key
            │  │     ├─ helper.rb
            │  │     ├─ htdigest
            │  │     ├─ htpasswd
            │  │     ├─ jruby_ssl_socket
            │  │     │  └─ test_pemutils.rb
            │  │     ├─ runner.rb
            │  │     ├─ server.cert
            │  │     ├─ server.key
            │  │     ├─ sslsvr.rb
            │  │     ├─ subca.cert
            │  │     ├─ test_auth.rb
            │  │     ├─ test_cookie.rb
            │  │     ├─ test_hexdump.rb
            │  │     ├─ test_http-access2.rb
            │  │     ├─ test_httpclient.rb
            │  │     ├─ test_include_client.rb
            │  │     ├─ test_jsonclient.rb
            │  │     ├─ test_ssl.rb
            │  │     └─ test_webagent-cookie.rb
            │  ├─ i18n-1.14.1
            │  │  ├─ MIT-LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ i18n
            │  │     │  ├─ backend
            │  │     │  │  ├─ base.rb
            │  │     │  │  ├─ cache.rb
            │  │     │  │  ├─ cache_file.rb
            │  │     │  │  ├─ cascade.rb
            │  │     │  │  ├─ chain.rb
            │  │     │  │  ├─ fallbacks.rb
            │  │     │  │  ├─ flatten.rb
            │  │     │  │  ├─ gettext.rb
            │  │     │  │  ├─ interpolation_compiler.rb
            │  │     │  │  ├─ key_value.rb
            │  │     │  │  ├─ lazy_loadable.rb
            │  │     │  │  ├─ memoize.rb
            │  │     │  │  ├─ metadata.rb
            │  │     │  │  ├─ pluralization.rb
            │  │     │  │  ├─ simple.rb
            │  │     │  │  └─ transliterator.rb
            │  │     │  ├─ backend.rb
            │  │     │  ├─ config.rb
            │  │     │  ├─ exceptions.rb
            │  │     │  ├─ gettext
            │  │     │  │  ├─ helpers.rb
            │  │     │  │  └─ po_parser.rb
            │  │     │  ├─ gettext.rb
            │  │     │  ├─ interpolate
            │  │     │  │  └─ ruby.rb
            │  │     │  ├─ locale
            │  │     │  │  ├─ fallbacks.rb
            │  │     │  │  ├─ tag
            │  │     │  │  │  ├─ parents.rb
            │  │     │  │  │  ├─ rfc4646.rb
            │  │     │  │  │  └─ simple.rb
            │  │     │  │  └─ tag.rb
            │  │     │  ├─ locale.rb
            │  │     │  ├─ middleware.rb
            │  │     │  ├─ tests
            │  │     │  │  ├─ basics.rb
            │  │     │  │  ├─ defaults.rb
            │  │     │  │  ├─ interpolation.rb
            │  │     │  │  ├─ link.rb
            │  │     │  │  ├─ localization
            │  │     │  │  │  ├─ date.rb
            │  │     │  │  │  ├─ date_time.rb
            │  │     │  │  │  ├─ procs.rb
            │  │     │  │  │  └─ time.rb
            │  │     │  │  ├─ localization.rb
            │  │     │  │  ├─ lookup.rb
            │  │     │  │  ├─ pluralization.rb
            │  │     │  │  └─ procs.rb
            │  │     │  ├─ tests.rb
            │  │     │  ├─ utils.rb
            │  │     │  └─ version.rb
            │  │     └─ i18n.rb
            │  ├─ json-2.6.3
            │  │  ├─ CHANGES.md
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ VERSION
            │  │  ├─ ext
            │  │  │  └─ json
            │  │  │     ├─ ext
            │  │  │     │  ├─ fbuffer
            │  │  │     │  │  └─ fbuffer.h
            │  │  │     │  ├─ generator
            │  │  │     │  │  ├─ depend
            │  │  │     │  │  ├─ extconf.rb
            │  │  │     │  │  ├─ generator.c
            │  │  │     │  │  └─ generator.h
            │  │  │     │  └─ parser
            │  │  │     │     ├─ depend
            │  │  │     │     ├─ extconf.rb
            │  │  │     │     ├─ parser.c
            │  │  │     │     ├─ parser.h
            │  │  │     │     └─ parser.rl
            │  │  │     └─ extconf.rb
            │  │  ├─ json.gemspec
            │  │  └─ lib
            │  │     ├─ json
            │  │     │  ├─ add
            │  │     │  │  ├─ bigdecimal.rb
            │  │     │  │  ├─ complex.rb
            │  │     │  │  ├─ core.rb
            │  │     │  │  ├─ date.rb
            │  │     │  │  ├─ date_time.rb
            │  │     │  │  ├─ exception.rb
            │  │     │  │  ├─ ostruct.rb
            │  │     │  │  ├─ range.rb
            │  │     │  │  ├─ rational.rb
            │  │     │  │  ├─ regexp.rb
            │  │     │  │  ├─ set.rb
            │  │     │  │  ├─ struct.rb
            │  │     │  │  ├─ symbol.rb
            │  │     │  │  └─ time.rb
            │  │     │  ├─ common.rb
            │  │     │  ├─ ext.rb
            │  │     │  ├─ generic_object.rb
            │  │     │  ├─ pure
            │  │     │  │  ├─ generator.rb
            │  │     │  │  └─ parser.rb
            │  │     │  ├─ pure.rb
            │  │     │  └─ version.rb
            │  │     └─ json.rb
            │  ├─ minitest-5.20.0
            │  │  ├─ .autotest
            │  │  ├─ History.rdoc
            │  │  ├─ Manifest.txt
            │  │  ├─ README.rdoc
            │  │  ├─ Rakefile
            │  │  ├─ design_rationale.rb
            │  │  ├─ lib
            │  │  │  ├─ hoe
            │  │  │  │  └─ minitest.rb
            │  │  │  ├─ minitest
            │  │  │  │  ├─ assertions.rb
            │  │  │  │  ├─ autorun.rb
            │  │  │  │  ├─ benchmark.rb
            │  │  │  │  ├─ expectations.rb
            │  │  │  │  ├─ hell.rb
            │  │  │  │  ├─ mock.rb
            │  │  │  │  ├─ parallel.rb
            │  │  │  │  ├─ pride.rb
            │  │  │  │  ├─ pride_plugin.rb
            │  │  │  │  ├─ spec.rb
            │  │  │  │  ├─ test.rb
            │  │  │  │  ├─ test_task.rb
            │  │  │  │  └─ unit.rb
            │  │  │  └─ minitest.rb
            │  │  └─ test
            │  │     └─ minitest
            │  │        ├─ metametameta.rb
            │  │        ├─ test_minitest_assertions.rb
            │  │        ├─ test_minitest_benchmark.rb
            │  │        ├─ test_minitest_mock.rb
            │  │        ├─ test_minitest_reporter.rb
            │  │        ├─ test_minitest_spec.rb
            │  │        ├─ test_minitest_test.rb
            │  │        └─ test_minitest_test_task.rb
            │  ├─ public_suffix-4.0.7
            │  │  ├─ .github
            │  │  │  ├─ FUNDING.yml
            │  │  │  ├─ dependabot.yml
            │  │  │  └─ workflows
            │  │  │     ├─ release.yml
            │  │  │     └─ tests.yml
            │  │  ├─ .gitignore
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_opinionated.yml
            │  │  ├─ .yardopts
            │  │  ├─ 2.0-Upgrade.md
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ SECURITY.md
            │  │  ├─ bin
            │  │  │  └─ console
            │  │  ├─ data
            │  │  │  └─ list.txt
            │  │  ├─ lib
            │  │  │  ├─ public_suffix
            │  │  │  │  ├─ domain.rb
            │  │  │  │  ├─ errors.rb
            │  │  │  │  ├─ list.rb
            │  │  │  │  ├─ rule.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ public_suffix.rb
            │  │  ├─ public_suffix.gemspec
            │  │  └─ test
            │  │     ├─ .empty
            │  │     ├─ acceptance_test.rb
            │  │     ├─ benchmarks
            │  │     │  ├─ bm_find.rb
            │  │     │  ├─ bm_find_all.rb
            │  │     │  ├─ bm_names.rb
            │  │     │  ├─ bm_select.rb
            │  │     │  ├─ bm_select_incremental.rb
            │  │     │  └─ bm_valid.rb
            │  │     ├─ profilers
            │  │     │  ├─ domain_profiler.rb
            │  │     │  ├─ find_profiler.rb
            │  │     │  ├─ find_profiler_jp.rb
            │  │     │  ├─ initialization_profiler.rb
            │  │     │  ├─ list_profsize.rb
            │  │     │  └─ object_binsize.rb
            │  │     ├─ psl_test.rb
            │  │     ├─ test_helper.rb
            │  │     ├─ tests.txt
            │  │     └─ unit
            │  │        ├─ domain_test.rb
            │  │        ├─ errors_test.rb
            │  │        ├─ list_test.rb
            │  │        ├─ public_suffix_test.rb
            │  │        └─ rule_test.rb
            │  ├─ rexml-3.2.6
            │  │  ├─ LICENSE.txt
            │  │  ├─ NEWS.md
            │  │  ├─ README.md
            │  │  ├─ doc
            │  │  │  └─ rexml
            │  │  │     ├─ context.rdoc
            │  │  │     ├─ tasks
            │  │  │     │  ├─ rdoc
            │  │  │     │  │  ├─ child.rdoc
            │  │  │     │  │  ├─ document.rdoc
            │  │  │     │  │  ├─ element.rdoc
            │  │  │     │  │  ├─ node.rdoc
            │  │  │     │  │  └─ parent.rdoc
            │  │  │     │  └─ tocs
            │  │  │     │     ├─ child_toc.rdoc
            │  │  │     │     ├─ document_toc.rdoc
            │  │  │     │     ├─ element_toc.rdoc
            │  │  │     │     ├─ master_toc.rdoc
            │  │  │     │     ├─ node_toc.rdoc
            │  │  │     │     └─ parent_toc.rdoc
            │  │  │     └─ tutorial.rdoc
            │  │  └─ lib
            │  │     ├─ rexml
            │  │     │  ├─ attlistdecl.rb
            │  │     │  ├─ attribute.rb
            │  │     │  ├─ cdata.rb
            │  │     │  ├─ child.rb
            │  │     │  ├─ comment.rb
            │  │     │  ├─ doctype.rb
            │  │     │  ├─ document.rb
            │  │     │  ├─ dtd
            │  │     │  │  ├─ attlistdecl.rb
            │  │     │  │  ├─ dtd.rb
            │  │     │  │  ├─ elementdecl.rb
            │  │     │  │  ├─ entitydecl.rb
            │  │     │  │  └─ notationdecl.rb
            │  │     │  ├─ element.rb
            │  │     │  ├─ encoding.rb
            │  │     │  ├─ entity.rb
            │  │     │  ├─ formatters
            │  │     │  │  ├─ default.rb
            │  │     │  │  ├─ pretty.rb
            │  │     │  │  └─ transitive.rb
            │  │     │  ├─ functions.rb
            │  │     │  ├─ instruction.rb
            │  │     │  ├─ light
            │  │     │  │  └─ node.rb
            │  │     │  ├─ namespace.rb
            │  │     │  ├─ node.rb
            │  │     │  ├─ output.rb
            │  │     │  ├─ parent.rb
            │  │     │  ├─ parseexception.rb
            │  │     │  ├─ parsers
            │  │     │  │  ├─ baseparser.rb
            │  │     │  │  ├─ lightparser.rb
            │  │     │  │  ├─ pullparser.rb
            │  │     │  │  ├─ sax2parser.rb
            │  │     │  │  ├─ streamparser.rb
            │  │     │  │  ├─ treeparser.rb
            │  │     │  │  ├─ ultralightparser.rb
            │  │     │  │  └─ xpathparser.rb
            │  │     │  ├─ quickpath.rb
            │  │     │  ├─ rexml.rb
            │  │     │  ├─ sax2listener.rb
            │  │     │  ├─ security.rb
            │  │     │  ├─ source.rb
            │  │     │  ├─ streamlistener.rb
            │  │     │  ├─ text.rb
            │  │     │  ├─ undefinednamespaceexception.rb
            │  │     │  ├─ validation
            │  │     │  │  ├─ relaxng.rb
            │  │     │  │  ├─ validation.rb
            │  │     │  │  └─ validationexception.rb
            │  │     │  ├─ xmldecl.rb
            │  │     │  ├─ xmltokens.rb
            │  │     │  ├─ xpath.rb
            │  │     │  └─ xpath_parser.rb
            │  │     └─ rexml.rb
            │  ├─ tzinfo-2.0.6
            │  │  ├─ .yardopts
            │  │  ├─ CHANGES.md
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ tzinfo
            │  │     │  ├─ annual_rules.rb
            │  │     │  ├─ country.rb
            │  │     │  ├─ country_timezone.rb
            │  │     │  ├─ data_source.rb
            │  │     │  ├─ data_sources
            │  │     │  │  ├─ constant_offset_data_timezone_info.rb
            │  │     │  │  ├─ country_info.rb
            │  │     │  │  ├─ data_timezone_info.rb
            │  │     │  │  ├─ linked_timezone_info.rb
            │  │     │  │  ├─ posix_time_zone_parser.rb
            │  │     │  │  ├─ ruby_data_source.rb
            │  │     │  │  ├─ timezone_info.rb
            │  │     │  │  ├─ transitions_data_timezone_info.rb
            │  │     │  │  ├─ zoneinfo_data_source.rb
            │  │     │  │  └─ zoneinfo_reader.rb
            │  │     │  ├─ data_sources.rb
            │  │     │  ├─ data_timezone.rb
            │  │     │  ├─ datetime_with_offset.rb
            │  │     │  ├─ format1
            │  │     │  │  ├─ country_definer.rb
            │  │     │  │  ├─ country_index_definition.rb
            │  │     │  │  ├─ timezone_definer.rb
            │  │     │  │  ├─ timezone_definition.rb
            │  │     │  │  └─ timezone_index_definition.rb
            │  │     │  ├─ format1.rb
            │  │     │  ├─ format2
            │  │     │  │  ├─ country_definer.rb
            │  │     │  │  ├─ country_index_definer.rb
            │  │     │  │  ├─ country_index_definition.rb
            │  │     │  │  ├─ timezone_definer.rb
            │  │     │  │  ├─ timezone_definition.rb
            │  │     │  │  ├─ timezone_index_definer.rb
            │  │     │  │  └─ timezone_index_definition.rb
            │  │     │  ├─ format2.rb
            │  │     │  ├─ info_timezone.rb
            │  │     │  ├─ linked_timezone.rb
            │  │     │  ├─ offset_timezone_period.rb
            │  │     │  ├─ ruby_core_support.rb
            │  │     │  ├─ string_deduper.rb
            │  │     │  ├─ time_with_offset.rb
            │  │     │  ├─ timestamp.rb
            │  │     │  ├─ timestamp_with_offset.rb
            │  │     │  ├─ timezone.rb
            │  │     │  ├─ timezone_offset.rb
            │  │     │  ├─ timezone_period.rb
            │  │     │  ├─ timezone_proxy.rb
            │  │     │  ├─ timezone_transition.rb
            │  │     │  ├─ transition_rule.rb
            │  │     │  ├─ transitions_timezone_period.rb
            │  │     │  ├─ version.rb
            │  │     │  └─ with_offset.rb
            │  │     └─ tzinfo.rb
            │  └─ zeitwerk-2.6.11
            │     ├─ MIT-LICENSE
            │     ├─ README.md
            │     └─ lib
            │        ├─ zeitwerk
            │        │  ├─ error.rb
            │        │  ├─ explicit_namespace.rb
            │        │  ├─ gem_inflector.rb
            │        │  ├─ gem_loader.rb
            │        │  ├─ inflector.rb
            │        │  ├─ internal.rb
            │        │  ├─ kernel.rb
            │        │  ├─ loader
            │        │  │  ├─ callbacks.rb
            │        │  │  ├─ config.rb
            │        │  │  ├─ eager_load.rb
            │        │  │  └─ helpers.rb
            │        │  ├─ loader.rb
            │        │  ├─ real_mod_name.rb
            │        │  ├─ registry.rb
            │        │  └─ version.rb
            │        └─ zeitwerk.rb
            └─ specifications
               ├─ CFPropertyList-3.0.6.gemspec
               ├─ activesupport-6.1.7.6.gemspec
               ├─ addressable-2.8.5.gemspec
               ├─ concurrent-ruby-1.2.2.gemspec
               ├─ httpclient-2.8.3.gemspec
               ├─ i18n-1.14.1.gemspec
               ├─ minitest-5.20.0.gemspec
               ├─ public_suffix-4.0.7.gemspec
               ├─ rexml-3.2.6.gemspec
               ├─ tzinfo-2.0.6.gemspec
               └─ zeitwerk-2.6.11.gemspec

```