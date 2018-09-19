import Quill from 'quill';

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