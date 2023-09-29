import CustomButton from './CustomButton'

const FilePicker = ({ file, readFile, setFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-col flex-1">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? 'No file chosen' : file.name}
        </p>
      </div>

      <div className="flex flex-wrap mt-4 gap-3">
        <CustomButton
          type={'outline'}
          title={'logo'}
          customStyles={'text-xs'}
          handleClick={() => readFile('logo')}
        />

        <CustomButton
          type={'filled'}
          title={'Full'}
          customStyles={'text-xs'}
          handleClick={() => readFile('full')}
        />
      </div>
    </div>
  )
}

export default FilePicker
