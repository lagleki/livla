declare module "path-extra" {
    export * from "path";

    /**
     * Replaces the extension from path with extension and returns the updated path string. From the module [`replace-ext`](https://github.com/gulpjs/replace-ext).
     * Example:
     * ```js
     *    path.replaceExt('dir/file.md', '.html')
     *    // => 'dir/file.html'
     *  ```
     * @param {string} filePath
     * @param {string} extension
     * @returns {string}
     */
    export function replaceExt(filePath: string, extension: string): string;

    /**
     * A `path.normalize()` that trims trailing slashes. Useful for comparing file paths.
     * Example:
     *
     * ```js
     *      path.normalize('/foo/bar//baz/asdf/quux/../')
     *  // => /foo/bar/baz/asdf/
     *  path.normalizeTrim('/foo/bar//baz/asdf/quux/../')
     *  // => /foo/bar/baz/asdf
     *  ```
     */
    export function normalizeTrim(filePath: string): string;

    /**
     * A smart wrapper for `path.basename()`.
     *
     * - When `includeExt` is `false`, returns the basename without an extension (`path.basename(filePath, path.extname(filePath))`).
     * - When `includeExt` is `true`, works like `path.basename(filePath)`.
     * - `includeExt` is `false` by default.
     *
     * Example:
     *
     * ```js
     * path.base('path/to/file.md')
     * // => file
     * path.base('path/to/file.md', false)
     * // => file
     * path.base('path/to/file.md', true)
     * // => file.md
     * ```
     */
    export function base(filePath: string, includeExt?: boolean): string;

    /**
     * Remove a path's extension.
     *
     * Example:
     *
     * ```js
     * path.removeExt('some/dir/file.ext')
     * // => some/dir/file
     * ```
     */
    export function removeExt(filepath: string): string;

    /**
     * Append string to the end of the filename.
     *
     * Example:
     *
     * ```js
     * path.fileNameWithPostfix('path/to/file-name.ext', '-old')
     * // => path/to/file-name-old.ext
     * ```
     */
    export function fileNameWithPostfix(filePath: string, postfix: string): string;

    /**
     * Append string to the beginning of the filename.
     *
     * Example:
     *
     * ```js
     * path.fileNameWithPrefix('path/to/file-name.ext', 'new-')
     * // => path/to/new-file-name.ext
     * ```
     */
    export function fileNameWithPrefix(filePath: string, prefix: string): string;

}
