class UsersController < ApplicationController
  # before_action :authorize_request, except: :create,
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :set_user, except: [:create, :index]
  before_action :authenticate_request, except: [:create, :index, :show]
  before_action :can_modify?, only:[:update, :destroy]

  # GET /users
  def index
    @users = User.all
    render json: @users, include: :posts
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  # MODIFY Admin
  def can_modify?
    current_user.id.to_i == params[:id].to_i || current_user.admin?
  end

  private
    # # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
end
