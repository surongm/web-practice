import React, { useEffect } from 'react'
import imageZip from './image.zip'

const MyDownload = () => {
    // 使用fetch请求下载
    useEffect(() => {
        fetch('http://somehost/somefile.zip')
            .then(res => res.blob())
            .then(blob => {
                console.log('test')
                let a = document.createElement('a')
                let url = window.URL.createObjectURL(blob)
                let filename = 'myfile.zip'
                a.href = url
                a.download = filename
                a.click()
                window.URL.revokeObjectURL(url)
            })
    })

    return (
        <div>
            {/* 使用h5下载 */}
            <div>
                <a href='http://somehost/somefile.zip' download='filename.zip' >
                    Download file
                </a>
            </div>
            {/* 这个 压缩包可以直接下载 */}
            <div>
                <a href={imageZip} download='image.zip' >
                    下载zip
                </a>
            </div>
            {/* 图片会在新页面打开预览 */}
            <div>
                <a href='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201303%2F16%2F173710lvx470i4348z6i6z.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619314633&t=ae78c70a6a7b082f12c4b648bdc6dbee' download='test.jpg' >
                    下载图片
                </a>
            </div>
        </div>
    )
}

export default MyDownload
