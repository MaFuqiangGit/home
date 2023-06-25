window.webapp.lasting('xxx')
function xxx(xxa, xxb) {
  let r = confirm('是否保存图片？')
  if (r == true) {
    function download(url) {
      const link = document.createElement('a')
      link.href = url
      link.download = 'filename'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    const xhr = new XMLHttpRequest()
    xhr.open('GET', xxb, true)
    xhr.responseType = 'blob'
    xhr.onload = function () {
      if (xhr.status === 200) {
        const url = URL.createObjectURL(xhr.response)
        download(url)
      }
    }
    xhr.send()
  }
}
