export class MainServiceService {
  constructor() {}
  getCourse() {
    return ['php', 'angular', 'react', 'html'];
  }

  setAddress() {
    return {
      city: 'Delhi',
      state: 'Delhi',
      Country: 'India',
    };
  }
}
