import gulp from 'gulp'

export default function () {
    return function (done) {
        return gulp.series(
                'remoteJs', 'remoteStyles'
            )(done)
    }
}
