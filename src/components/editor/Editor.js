import Quill from 'quill';
//import 'quill/dist/quill.core.css';
//import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.snow.css';


export default {
	name: 'Editor',
	mounted(){
		new Quill('#editor', {
			modules: {
				toolbar: [
					[{ 'header': [1, 2, false], 'container':'#toolbar' }],
					['bold', 'italic', 'underline'],
					[{ 'align': [] }],
					['image', 'code-block','link'],
					[{ 'list': 'ordered' }, { 'list': 'bullet' }],
				]
			},
			placeholder: 'Compose an epic...',
			theme: 'snow'  // or 'bubble'
		});
	}
}