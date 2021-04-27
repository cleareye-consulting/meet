function startMeeting(roomName, displayName) {
  if (!roomName) {
    roomName = getRandomRoomName()
  }
  api = new JitsiMeetExternalAPI('meet.jit.si', {
    roomName,
    width: 700,
    height: 400,
    parentNode: document.querySelector('#meet'),
    userInfo: {
      email: 'jmgant@cleareyeconsulting.com',
      displayName,
    },
  })
  document.querySelector('#meetingLink').innerHTML = `The meeting link is ${document.URL}?meetingId=${roomName}`
  document.querySelector('#startMeetingButton').setAttribute('disabled', 'disabled')
}

function getRandomRoomName() {
  const animals = [
    'aardvark',
    'bear',
    'camel',
    'dolphin',
    'emu',
    'frog',
    'giraffe',
    'hippo',
    'iguana',
    'jackrabbit',
    'koala',
    'lemur',
    'monkey',
    'nightingale',
    'ostrich',
    'panda',
    'quail',
    'robin',
    'stork',
    'tapir',
    'vole',
    'walrus',
    'zebra',
  ]
  const attributes = ['happy', 'sad', 'smiling', 'fuzzy', 'normal', 'strange', 'sleeping', 'super']
  const colors = ['red', 'green', 'blue', 'pink', 'purple', 'brown', 'orange', 'violet', 'lavender']
  const random1 = Math.floor(Math.random() * animals.length)
  const random2 = Math.floor(Math.random() * attributes.length)
  const random3 = Math.floor(Math.random() * colors.length)
  return `${attributes[random2]}-${colors[random3]}-${animals[random1]}`
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search)
  const roomName = params.get('meetingId')
  if (roomName) {
    const displayName = params.get('displayName')
    startMeeting(roomName, displayName)
    document.querySelector('#startMeetingButton').classList.add('hidden')
  }

  document.querySelector('#startMeetingButton').addEventListener('click', () => startMeeting())
})
