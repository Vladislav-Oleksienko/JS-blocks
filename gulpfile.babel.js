'use strict'

// import libsCss from './config/tasks/libsCss'
import styles from './config/tasks/styles'
import js from './config/tasks/js'
import clean from './config/tasks/clean'
import fonts from './config/tasks/fonts'
import images from './config/tasks/images'
import watch from './config/tasks/watch'
import build from './config/tasks/build'
import remoteBuild from "./config/tasks/remote-site";
import remoteStyles from "./config/tasks/remote-styles"
import remoteJs from "./config/tasks/remote-js"

// exports.libsCss = libsCss()
exports.styles = styles()
exports.js = js()
exports.clean = clean()
exports.fonts = fonts()
exports.images = images()
exports.watch = watch()
exports.default = build()
exports.remoteSite = remoteBuild()
exports.remoteStyles = remoteStyles()
exports.remoteJs = remoteJs()
