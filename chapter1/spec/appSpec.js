describe("Warren via Object Constructor",function(){
  var warren;

  beforeEach(function(){
    warren = new Object();
    warren.name = "Warren";
    warren.age = 24;
    warren.living = true;
    warren.gender = 'male';
    warren.getGender = function(){return this.gender}
    warren.getYOB = function(){
      d = new Date();
      return (d.getFullYear() - this.age).toString();}
  });

  it("should be instance of Object",function(){
    expect(warren instanceof Object).toBe(true);
  });

  it("should have a name",function(){
    expect(warren.name).toEqual('Warren');
  });

  it("should have access to its gender",function(){
    expect(warren.getGender()).toEqual('male');
  });

  it("should calculate YOB",function(){
    expect(warren.getYOB()).toEqual('1990');
  });

});

describe("Warren via Object Literal notation",function(){
    var warren;

    beforeEach(function(){
      warren = {};
      warren.name = "Warren";
      warren.age = 24;
      warren.living = true;
      warren.gender = 'male';
      warren.getGender = function(){return this.gender}
      warren.getYOB = function(){
        d = new Date();
        return (d.getFullYear() - this.age).toString();
      }
    });

    it("should be instance of Object",function(){
      expect(warren instanceof Object).toBe(true);
    });

    it("should have a name",function(){
      expect(warren.name).toEqual("Warren");
    });

    it("should know its gender",function(){
      expect(warren.getGender()).toEqual('male');
    });

    it("should calculate its YOB",function(){
      expect(warren.getYOB()).toEqual('1990');
    });

});

describe("Warren via People Constructor",function(){
    function Person(name,age,gender,living){
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.living = living;
      this.getGender = function(){return this.gender};
      this.getYOB = function(){
        var d = new Date();
        return (d.getFullYear() - this.age).toString();
      }
    }
    var warren;

    beforeEach(function(){
      warren = new Person('Warren',24,'male',true);
    });

    it('should be instance of Person',function(){
      expect(warren instanceof Person).toBe(true);
    });

    it('should have a name',function(){
      expect(warren.name).toEqual('Warren');
    });

    it('should know its gender',function(){
      expect(warren.getGender()).toEqual('male');
    });

    it("should calculate it's year of birth",function(){
      expect(warren.getYOB()).toEqual('1990');
    });

});