import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  addAuthorForm:FormGroup=new FormGroup({});
  listAutors:any;
  displayedColumns: string[] = ['ID', 'Name', 'Birth Date', 'About', 'Action'];

  saving:boolean=false;

  constructor(private AuthorService:AuthorService,
    private formBuilder:FormBuilder,
    private _snackBar:MatSnackBar,
    private title:Title) { 
      this.title.setTitle("Blog Authors");
    }

  ngOnInit(): void {
    this.getAuthors();
    const date = new Date();
    this.addAuthorForm=this.formBuilder.group({
      'Name' : new FormControl('',Validators.required),
      'Dob' : new FormControl('',[Validators.required]),
      'About' : new FormControl('',Validators.required)
    });
  }
  
  DeletePost(id:any){

  }
  getAuthors(){
    return this.AuthorService.listAuthors().subscribe(data=>{
      this.listAutors=data;
    })
  }
  createAuthor(){
    this.saving=true;
    const data = {
      name: this.addAuthorForm.value["Name"],
      dob: this.addAuthorForm.value["Dob"],
      about: this.addAuthorForm.value["About"]
    };
    setTimeout(() => {
      this.AuthorService.addAuthor(data).subscribe(data=>{
        this.saving=false;
        console.log("Data saved");
        let snackBarRef = this._snackBar.open('Data saved successfully', 'Ok');
      snackBarRef.afterDismissed().subscribe(() => {
        window.location.reload();
      });
      },err=>{
        console.log(err);
      })
    }, 5000);
  }
}
