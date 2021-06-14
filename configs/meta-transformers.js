const path = require('path');

module.exports = [
    {
        pattern: 'en/**/*.njk',

        transform: (filepath, file) => {
            file.language = 'en';
        }
    }, {
        pattern: 'my/**/*.njk',

        transform: (filepath, file) => {
            file.language = 'my';
        }
    }, {
        pattern: '**/*.njk',

        transform: (filepath, file) => {
            let root = path.relative(path.dirname(filepath), './').split(path.sep).join('/');
            if(root) root += '/';

            let pathFormat = path.parse(filepath);
            let fileDirectory = (pathFormat.dir ? pathFormat.dir + '/' : '');
            let fileDirectoryWithNoLanguage = fileDirectory.substr(3);
            let fileName = pathFormat.name;
            let pageImagePath = (file.data && file.data.pageImageFolder)
                ? 'assets/images/pages/' + file.data.pageImageFolder + '/'
                : 'assets/images/pages/' + fileDirectoryWithNoLanguage + fileName + '/';
            let pageParentImagePath = path.join(pageImagePath, '../').split(path.sep).join('/');

            file.path = {
                root,
                css: root + 'assets/css/',
                js: root + 'assets/js/',
                pdf: root + 'assets/pdf/',

                language: {
                    en: root + 'en/',
                    my: root + 'my/'
                },

                images: {
                    base: root + 'assets/images/',
                    icons: root + 'assets/images/shared/icons/',
                    logos: root + 'assets/images/shared/logos/',
                    pages: root + 'assets/images/pages/',

                    /*
                     * Set the page's image folder based on its folder path and
                     * file name:
                     *
                     * - If folder path & file name = plans/prepaid/ultimate.njk,
                     *   then {{ path.images.page }} = {{ path.root }}assets/images/pages/plans/prepaid/ultimate/
                     *   and {{ path.images.pageParent }} = {{ path.root }}assets/images/pages/plans/prepaid/
                     *
                     * - If folder path & file name = about/team/index.njk,
                     *   then {{ path.images.page }} = {{ path.root }}assets/images/pages/about/team/index/
                     *   and {{ path.images.pageParent }} = {{ path.root }}assets/images/pages/about/team/
                     */
                    page: root + pageImagePath,
                    pageParent: root + pageParentImagePath
                },

                videos: root + 'assets/videos/'
            };
        }
    }
];