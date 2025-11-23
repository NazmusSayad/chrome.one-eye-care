import archiver from 'archiver'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const FILE_NAME = 'one-eye-care.zip'
const FILE_PATH = path.join(__dirname, FILE_NAME)

if (fs.existsSync(FILE_PATH)) {
  fs.unlinkSync(FILE_PATH)
}

function generateZip(src: string, out: string): Promise<archiver.Archiver> {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(out)
    const archive = archiver('zip', { zlib: { level: 9 } })

    output.on('close', () => resolve(archive))
    archive.on('error', (err) => reject(err))

    archive.pipe(output)
    archive.directory(src, false)
    archive.finalize()
  })
}

generateZip('./dist', FILE_PATH).then((archive) => {
  archive.on('end', () => {
    console.log('Zip file has been created successfully')
  })
})
