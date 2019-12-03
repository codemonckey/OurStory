import axios from 'axios'

const SERVER_URL = 'http://localhost:8080';

const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 1000
});

export default {
    createNew: (text, firstSentence) => instance.post('stories', {title: text, sentence: firstSentence}),

    getAll: () => instance.get('stories', {
        transformResponse: [function (data) {
            return data? JSON.parse(data)._embedded.stories : data;
        }]
    }),

    updateForId: (id, text, firstSentenc) => instance.put('stories/'+id, {title: text, sentence: firstSentence}),

    removeForId: (id) => instance.delete('stories/'+id)
}